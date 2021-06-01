import { isVue3 } from "vue-demi";
import { Directive, DirectiveBinding } from "./utils";

type Function = (str: string, ...args: any[]) => string | undefined;
type Custom = {
    before?: (param: any[], binding: DirectiveBinding) => void;
    after?: (param: any[], binding: DirectiveBinding) => void;
};

export default (func: Function, name: string, sync = true, custom: Custom = {}): Directive => {
    const params: any[] = [];

    const setElementText = (el: HTMLInputElement) => {
        if (el.value) {
            el.value = func(el.value, ...params) as string;
        } else if (el.innerText) {
            el.innerText = func(el.innerText, ...params) as string;
        } else if (el.textContent) {
            el.textContent = func(el.textContent, ...params) as string;
        }
    };
    const inputEvent = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (!target) return;

        setElementText(target);
    };

    function mounted(el: HTMLInputElement, binding: DirectiveBinding) {
        if (custom.before) custom.before(params, binding);
        setElementText(el);
        if (custom.after) custom.after(params, binding);
        if (sync && binding.modifiers.sync) {
            el.addEventListener("input", inputEvent);
        }
    }
    function unmounted(el: HTMLInputElement, binding: DirectiveBinding) {
        if (sync && binding.modifiers.sync) {
            el.removeEventListener("input", inputEvent);
        }
    }

    return isVue3 ? { mounted, unmounted, name } : { bind: mounted, unbind: unmounted, name };
};
