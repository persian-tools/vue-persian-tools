import { defineComponent, h } from "vue-demi";
import { verifyCardNumber } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "verifyCardNumber",
    mixins: [tag],
    props: {
        digits: {
            type: Number,
            required: true
        }
    },
    computed: {
        isCardValid(): boolean | undefined {
            return verifyCardNumber(this.digits);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isValid: this.isCardValid });
        return h(this.tag, __SLOTS__);
    }
});
