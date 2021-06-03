import { defineComponent, h } from "vue-demi";
import { digitsArToEn, digitsArToFa, digitsEnToAr, digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

export default defineComponent({
    name: "digits",
    mixins: [tag],
    props: {
        number: {
            type: [String, Number],
            required: true
        },
        convert: {
            type: String,
            default: "enFa",
            validator: (value: string) => ["enFa", "enAr", "faEn", "arFa", "arEn"].includes(value)
        }
    },
    computed: {
        convertNumber(): string | undefined {
            let _value: string | undefined = undefined;
            switch (this.convert) {
                case "enFa":
                    _value = digitsEnToFa(this.number);
                    break;
                case "enAr":
                    _value = digitsEnToAr(this.number);
                    break;
                case "faEn":
                    _value = digitsFaToEn(this.number.toString());
                    break;
                case "arFa":
                    _value = digitsArToFa(this.number.toString());
                    break;
                case "arEn":
                    _value = digitsArToEn(this.number.toString());
                    break;
            }
            return _value;
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { value: this.convertNumber });
        return h(this.tag, __SLOTS__);
    }
});
