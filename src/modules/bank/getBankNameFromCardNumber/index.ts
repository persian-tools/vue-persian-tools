import { defineComponent, h } from "vue-demi";
import { getBankNameFromCardNumber } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "getBankNameFromCardNumber ",
    mixins: [tag],
    props: {
        digits: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        getBankName(): string | undefined | null {
            return getBankNameFromCardNumber(this.digits);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { bankName: this.getBankName });
        return h(this.tag, __SLOTS__);
    }
});
