// import { isVue3 } from "vue-demi";
import { halfSpace } from "@persian-tools/persian-tools";
import { ObjectDirective } from "vue";

const inputEvent = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (!target) return;

    if (target.value) {
        target.value = halfSpace(target.value) as string;
    } else if (target.innerText) {
        target.innerText = halfSpace(target.innerText) as string;
    } else if (target.textContent) {
        target.textContent = halfSpace(target.textContent) as string;
    }
};

const halfSpaceDirective: ObjectDirective = {
    mounted(el, binding) {
        if (el.value) el.value = halfSpace(el.value);
        else if (el.innerText) el.innerText = halfSpace(el.innerText);
        else if (el.textContent) el.textContent = halfSpace(el.textContent);
        if (binding.modifiers.sync) {
            el.addEventListener("input", inputEvent);
        }
    },
    unmounted(el, binding) {
        if (binding.modifiers.sync) {
            el.removeEventListener("input", inputEvent);
        }
    }
};
export default halfSpaceDirective;
