import { defineComponent, h } from "vue-demi";
import { isPersian } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "isPersian",
    mixins: [tag],
    props: {
        str: {
            type: String,
            required: true
        },
        trimPattern: {
            type: RegExp,
            default: () => /["'-+()؟\s.]/g
        },
        isComplex: Boolean
    },
    computed: {
        isFa(): boolean {
            return isPersian(this.str!, this.isComplex, this.trimPattern);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isPersian: this.isFa });
        return h(this.tag, __SLOTS__);
    }
});
