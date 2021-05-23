import { defineComponent, h } from "vue-demi";
import { URLfix } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "URLfix",
    mixins: [tag],
    props: {
        url: {
            type: String,
            required: true
        }
    },
    computed: {
        fixURL(): string | undefined {
            return URLfix(this.url!);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { url: this.fixURL });
        return h(this.tag, __SLOTS__);
    }
});
