import { ObjectDirective as Vue3Directive, DirectiveBinding as Vue3DirectiveBinding } from "vue";

interface Vue2DirectiveBinding {
    modifiers: Record<string, boolean>;
}
interface Vue2Directive<T = HTMLInputElement> {
    bind?: (el: T, binding: Vue2DirectiveBinding) => void;
    unbind?: (el: T, binding: Vue2DirectiveBinding) => void;
}

interface Directive<T = HTMLInputElement> extends Vue2Directive<T>, Vue3Directive {}
type DirectiveBinding = Vue2DirectiveBinding | Vue3DirectiveBinding;

export { Vue2DirectiveBinding, Vue2Directive, Vue3DirectiveBinding, Vue3Directive, Directive, DirectiveBinding };
