import { defineComponent, h } from "vue-demi";
import { addCommas } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "addCommas",
    mixins: [tag],
    props: {
        number: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        add(): string | undefined {
            return addCommas(this.number);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { number: this.add });
        return h(this.tag, __SLOTS__);
    }
});
