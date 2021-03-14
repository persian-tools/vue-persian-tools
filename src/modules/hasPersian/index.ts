import { defineComponent, h } from "vue-demi";
import { hasPersian } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "hasPersian",
    mixins: [tag],
    props: {
        text: {
            type: String,
            requied: true
        }
    },
    computed: {
        hasPersianInText(): boolean {
            return hasPersian(this.text!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { hasPersian: this.hasPersianInText });
        return h(this.tag, __SLOTS__);
    }
});
