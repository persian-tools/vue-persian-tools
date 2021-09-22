import { defineComponent, h } from "vue-demi";
import { numberToWords } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "numberToWords",
    mixins: [tag],
    props: {
        number: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        convertToWords(): string {
            return numberToWords(this.number).toString();
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { words: this.convertToWords });
        return h(this.tag, __SLOTS__);
    }
});
