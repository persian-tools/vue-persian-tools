import { defineComponent, h } from "vue-demi";
import { removeOrdinalSuffix } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "removeOrdinalSuffix",
    mixins: [tag],
    props: {
        number: {
            type: String,
            required: true
        }
    },
    computed: {
        removeOrdinalSuffixValue(): string | undefined | never {
            return removeOrdinalSuffix(this.number!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { text: this.removeOrdinalSuffixValue });
        return h(this.tag, __SLOTS__);
    }
});
