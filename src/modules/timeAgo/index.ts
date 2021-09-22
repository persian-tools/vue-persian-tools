import { defineComponent, h } from "vue-demi";
import { timeAgo } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "timeAgo",
    mixins: [tag],
    props: {
        date: {
            type: String,
            required: true
        }
    },
    computed: {
        time(): string {
            return timeAgo(this.date);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { time: this.time });
        return h(this.tag, __SLOTS__);
    }
});
