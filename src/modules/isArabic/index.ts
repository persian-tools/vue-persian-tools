import { defineComponent, h } from "vue-demi";
import { isArabic } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "isArabic",
    mixins: [tag],
    props: {
        str: {
            type: String,
            required: true
        },
        trimPattern: {
            type: RegExp,
            default: () => /["'-+()؟\s.]/g
        }
    },
    computed: {
        isAr(): boolean {
            return isArabic(this.str!, this.trimPattern);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isArabic: this.isAr });
        return h(this.tag, __SLOTS__);
    }
});
