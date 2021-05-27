import { isVue3 } from "vue-demi";
import { Directive, DirectiveBinding } from "./utils";

type Function = (str: string) => string | undefined;

export default (func: Function) => {
    const setElementText = (el: HTMLInputElement) => {
        if (el.value) {
            el.value = func(el.value) as string;
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

    function mounted(el: HTMLInputElement, binding: DirectiveBinding) {
        setElementText(el);
        if (binding.modifiers.sync) {
            el.addEventListener("input", inputEvent);
        }
    }
    function unmounted(el: HTMLInputElement, binding: DirectiveBinding) {
        if (binding.modifiers.sync) {
            el.removeEventListener("input", inputEvent);
        }
    }

    let directive: Directive;

    if (isVue3) {
        directive = {
            mounted,
            unmounted
        };
    } else {
        directive = {
            bind: mounted,
            unbind: unmounted
        };
    }

    return directive;
};
