import { isVue3 } from "vue-demi";
import { Directive, DirectiveBinding } from "./utils";

type Function = (str: string) => string | undefined;

export default (func: Function, name: string) => {
    const setElementText = (el: HTMLInputElement | HTMLElement) => {
        if ((el as HTMLInputElement).value) {
            (el as HTMLInputElement).value = func((el as HTMLInputElement).value) as string;
        } else {
            el.textContent = func(el.textContent as string) as string;
        }
    };
    const inputEvent = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (!target) return;

        setElementText(target);
    };

    function mounted(el: HTMLInputElement | HTMLElement, binding: DirectiveBinding) {
        setElementText(el);
        if (binding.modifiers.sync) {
            el.addEventListener("input", inputEvent);
        }
    }
    function unmounted(el: HTMLInputElement | HTMLElement, binding: DirectiveBinding) {
        if (binding.modifiers.sync) {
            el.removeEventListener("input", inputEvent);
        }
    }

    let directive: Directive;

    if (isVue3) {
        directive = {
            mounted,
            unmounted,
            name
        };
    } else {
        directive = {
            bind: mounted,
            unbind: unmounted,
            name
        };
    }

    return directive;
};
