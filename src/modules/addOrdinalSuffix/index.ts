import { defineComponent, h } from "vue-demi";
import { addOrdinalSuffix } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "addOrdinalSuffix",
    mixins: [tag],
    props: {
        number: {
            type: String,
            requied: true
        }
    },
    computed: {
        addOrdinalSuffixValue(): string | undefined | never {
            return addOrdinalSuffix(this.number!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { text: this.addOrdinalSuffixValue });
        return h(this.tag, __SLOTS__);
    }
});
