import { isVue3 } from "vue-demi";

export function getSlot(Vue: any, props: Record<string, any>): Record<string, any> {
    let __SLOT__;
    if (isVue3) {
        __SLOT__ = Vue.$slots.default ? Vue.$slots.default(props) : undefined;
    } else {
        __SLOT__ = (Vue as any).$scopedSlots.default(props);
    }

    return __SLOT__;
}
