import { defineComponent, h } from "vue-demi";
import { halfSpace } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "halfSpace",
    mixins: [tag],
    props: {
        str: {
            type: String,
            required: true
        }
    },
    computed: {
        computeHalfspace(): string | undefined {
            return halfSpace(this.str!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { text: this.computeHalfspace });
        return h(this.tag, __SLOTS__);
    }
});
