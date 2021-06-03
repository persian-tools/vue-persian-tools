import { defineComponent, h } from "vue-demi";
import { removeCommas } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "removeCommas",
    mixins: [tag],
    props: {
        number: {
            type: String,
            required: true
        }
    },
    computed: {
        remove(): number | string {
            return removeCommas(this.number);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { number: this.remove });
        return h(this.tag, __SLOTS__);
    }
});
