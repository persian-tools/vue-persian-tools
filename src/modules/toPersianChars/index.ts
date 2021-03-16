import { defineComponent, h } from "vue-demi";
import { toPersianChars } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "toPersianChars",
    mixins: [tag],
    props: {
        str: {
            type: String,
            requied: true
        }
    },
    computed: {
        hasPersianInText(): string | undefined {
            return toPersianChars(this.str!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { text: this.hasPersianInText });
        return h(this.tag, __SLOTS__);
    }
});
