import { ObjectDirective as Vue3Directive, DirectiveBinding as Vue3DirectiveBinding } from "vue";

interface Vue2DirectiveBinding {
    modifiers: Record<string, boolean>;
}
interface Vue2Directive<T = any> {
    bind?: (el: T, binding: Vue2DirectiveBinding) => void;
    unbind?: (el: T, binding: Vue2DirectiveBinding) => void;
}

type Directive = Vue2Directive | Vue3Directive;
type DirectiveBinding = Vue2DirectiveBinding | Vue3DirectiveBinding;

export { Vue2DirectiveBinding, Vue2Directive, Vue3Directive, Directive, DirectiveBinding };
