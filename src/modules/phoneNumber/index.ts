import { defineComponent, h } from "vue-demi";
import { OperatorModel, phoneNumberDetail, phoneNumberValidator } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "phoneNumber",
    mixins: [tag],
    props: {
        number: {
            type: String,
            required: true
        }
    },
    computed: {
        details(): OperatorModel | null {
            return phoneNumberDetail(this.number);
        },
        isValid(): boolean {
            return phoneNumberValidator(this.number);
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { details: this.details, isValid: this.isValid });
        return h(this.tag, __SLOTS__);
    }
});
