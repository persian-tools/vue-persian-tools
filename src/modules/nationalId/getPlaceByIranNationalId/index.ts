import { defineComponent, h } from "vue-demi";
import { getPlaceByIranNationalId } from "@persian-tools/persian-tools";
import { getSlot } from "../../helpers/getSlot.skip";
import tag from "../../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "getPlaceByIranNationalId",
    mixins: [tag],
    props: {
        nationalId: {
            type: String,
            required: true
        }
    },
    computed: {
        city(): string | undefined {
            return getPlaceByIranNationalId(this.nationalId)?.city;
        },
        province(): string | undefined {
            return getPlaceByIranNationalId(this.nationalId)?.province;
        },
        codes(): string[] | number[] | undefined {
            return getPlaceByIranNationalId(this.nationalId)?.codes;
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { city: this.city, province: this.province, codes: this.codes });
        return h(this.tag, __SLOTS__);
    }
});
