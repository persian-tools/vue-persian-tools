import { defineComponent, h } from "vue-demi";
import { Sheba } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";
import { ShebaResult } from "@persian-tools/persian-tools/build/modules/sheba";

export default defineComponent({
    name: "Sheba",
    mixins: [tag],
    props: {
        shebaCode: {
            type: String,
            requied: true
        }
    },
    computed: {
        isValid(): boolean {
            return new Sheba(this.shebaCode!).validate();
        },
        info(): ShebaResult | null {
            return new Sheba(this.shebaCode!).recognize();
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { isValid: this.isValid, info: this.info });
        return h(this.tag, __SLOTS__);
    }
});
