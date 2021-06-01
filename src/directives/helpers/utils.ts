import { ObjectDirective as Vue3Directive, DirectiveBinding as Vue3DirectiveBinding } from "vue";

interface Vue2DirectiveBinding {
    modifiers: Record<string, boolean>;
    argument?: string;
}
interface DirectiveBinding extends Vue2DirectiveBinding, Vue3DirectiveBinding {}

interface Vue2Directive<T = HTMLInputElement> {
    bind?: (el: T, binding: DirectiveBinding) => void;
    unbind?: (el: T, binding: DirectiveBinding) => void;
}

interface Directive<T = HTMLInputElement> extends Vue2Directive<T>, Vue3Directive {
    name: string;
}

export { Vue2DirectiveBinding, Vue2Directive, Vue3DirectiveBinding, Vue3Directive, Directive, DirectiveBinding };
