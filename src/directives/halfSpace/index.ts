import { isVue3 } from "vue-demi";
import { halfSpace } from "@persian-tools/persian-tools";
import { Directive, DirectiveBinding } from "../helpers/utils";

const setElementText = (el: HTMLInputElement) => {
    if (el.value) {
        el.value = halfSpace(el.value) as string;
    } else if (el.innerText) {
        el.innerText = halfSpace(el.innerText) as string;
    } else if (el.textContent) {
        el.textContent = halfSpace(el.textContent) as string;
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

let halfSpaceDirective: Directive;

if (isVue3) {
    halfSpaceDirective = {
        mounted,
        unmounted
    };
} else {
    halfSpaceDirective = {
        bind: mounted,
        unbind: unmounted
    };
}

export default halfSpaceDirective;
