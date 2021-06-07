import { isVue3 } from "vue-demi";
import { Directive, DirectiveBinding } from "./utils";

type Function = (str: string, ...args: any[]) => string | undefined;
type Custom = {
    before?: (param: any[], binding: DirectiveBinding) => void;
    after?: (param: any[], binding: DirectiveBinding) => void;
};

export default (func: Function, name: string, custom: Custom = {}): Directive => {
    let params: any[];
    const setElementText = (el: HTMLInputElement | HTMLElement) => {
        if ((el as HTMLInputElement).value) {
            (el as HTMLInputElement).value = func((el as HTMLInputElement).value, ...params) as string;
        } else if (el.textContent) {
            el.textContent = func(el.textContent, ...params) as string;
        }
    };
    const inputEvent = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (!target) return;

        setElementText(target);
    };

    function mounted(el: HTMLInputElement | HTMLElement, binding: DirectiveBinding) {
        params = [];
        if (custom.before) custom.before(params, binding);
        setElementText(el);
        if (custom.after) custom.after(params, binding);
        if (binding.modifiers.sync) {
            el.addEventListener("input", inputEvent);
        }
    }
    function unmounted(el: HTMLInputElement | HTMLElement, binding: DirectiveBinding) {
        if (binding.modifiers.sync) {
            el.removeEventListener("input", inputEvent);
        }
    }

    return isVue3 ? { mounted, unmounted, name } : { bind: mounted, unbind: unmounted, name };
};
