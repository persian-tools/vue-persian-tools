import { defineComponent, h } from "vue-demi";
import { isPersian } from "@persian-tools/persian-tools";
import { getSlot } from "../helper";

export default defineComponent({
    name: "isPersian",
    props: {
        text: {
            type: String,
            requied: true
        },
        tag: {
            type: String,
            default: "span"
        }
    },
    computed: {
        isFa(): boolean {
            return isPersian(this.text!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isPersian: this.isFa });
        return h(this.tag, __SLOTS__);
    }
});
