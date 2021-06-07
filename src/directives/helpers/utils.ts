import { ObjectDirective as Vue3Directive, DirectiveBinding as Vue3DirectiveBinding } from "vue";

type DirectiveFunction = (el: HTMLInputElement | HTMLElement, binding: DirectiveBinding, ...nodes: any) => void;

interface Vue2DirectiveBinding {
    modifiers: Record<string, boolean>;
    argument?: string;
}
interface DirectiveBinding extends Vue2DirectiveBinding, Vue3DirectiveBinding {}
interface Vue2Directive<> {
    bind?: DirectiveFunction;
    inserted?: DirectiveFunction;
    update?: DirectiveFunction;
    componentUpdated?: DirectiveFunction;
    unbind?: DirectiveFunction;
}
interface Directive extends Vue2Directive, Vue3Directive {
    name: string;
}

export { Vue2DirectiveBinding, Vue2Directive, Vue3DirectiveBinding, Vue3Directive, Directive, DirectiveBinding };
