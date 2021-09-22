import { defineComponent, h } from "vue-demi";
import { Plate, PlateOptions, PlateResultApi } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "plate",
    mixins: [tag],
    props: {
        number: {
            type: [String, Object as () => PlateOptions],
            required: true
        }
    },
    computed: {
        info(): PlateResultApi {
            return Plate(this.number).info;
        },
        isValid(): boolean {
            return Plate(this.number).isValid;
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { info: this.info, isValid: this.isValid });
        return h(this.tag, __SLOTS__);
    }
});
