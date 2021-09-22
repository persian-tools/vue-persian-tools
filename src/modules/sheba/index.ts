import { defineComponent, h } from "vue-demi";
import { isShebaValid, getShebaInfo } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";
import { ShebaResult } from "@persian-tools/persian-tools/build/modules/sheba";

export default defineComponent({
    name: "Sheba",
    mixins: [tag],
    props: {
        shebaCode: {
            type: String,
            required: true
        }
    },
    computed: {
        isValid(): boolean {
            return isShebaValid(this.shebaCode);
        },
        info(): ShebaResult | null {
            return getShebaInfo(this.shebaCode);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isValid: this.isValid, info: this.info });
        return h(this.tag, __SLOTS__);
    }
});
