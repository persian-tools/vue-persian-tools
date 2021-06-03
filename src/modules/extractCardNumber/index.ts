import { defineComponent, h } from "vue-demi";
import { ExtractCardNumber, extractCardNumber } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "extractCardNumber",
    mixins: [tag],
    props: {
        str: {
            type: String,
            required: true
        }
    },
    computed: {
        extractCardNumbers(): ExtractCardNumber[] {
            return extractCardNumber(this.str, {
                detectBankNumber: true,
                checkValidation: true,
                filterValidCardNumbers: false
            });
        },
        extractValidCardNumbers(): ExtractCardNumber[] {
            return extractCardNumber(this.str, {
                detectBankNumber: true,
                checkValidation: true,
                filterValidCardNumbers: true
            });
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { cards: this.extractCardNumbers, valid: this.extractValidCardNumbers });
        return h(this.tag, __SLOTS__);
    }
});
