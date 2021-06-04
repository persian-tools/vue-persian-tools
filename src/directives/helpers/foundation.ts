import { isVue3 } from "vue-demi";
import { Directive, DirectiveBinding } from "./utils";

type Function = (str: string) => string | undefined;

export default (func: Function, name: string) => {
    const setElementText = (el: HTMLInputElement | HTMLElement) => {
        const _el: HTMLInputElement = el as HTMLInputElement;
        if (_el.value) {
            _el.value = func(_el.value) as string;
        } else if (el.innerText) {
            el.innerText = func(el.innerText) as string;
        } else if (el.textContent) {
            el.textContent = func(el.textContent) as string;
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
