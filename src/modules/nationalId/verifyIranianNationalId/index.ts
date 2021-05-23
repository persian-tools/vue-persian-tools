import { defineComponent, h } from "vue-demi";
import { verifyIranianNationalId } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "verifyIranianNationalId",
    mixins: [tag],
    props: {
        nationalId: {
            type: [String, Number],
            required: true
        }
    },
    computed: {
        isValid(): boolean | null | undefined {
            return verifyIranianNationalId(this.nationalId);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isValid: this.isValid });
        return h(this.tag, __SLOTS__);
    }
});
