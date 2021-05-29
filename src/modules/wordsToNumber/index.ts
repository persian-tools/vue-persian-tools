import { defineComponent, h } from "vue-demi";
import { WordsToNumber } from "@persian-tools/persian-tools";
import { getSlot } from "../helpers/getSlot.skip";
import tag from "../helpers/tagPropMixin.skip";

type WordsToNumberOptionsDigits = "en" | "fa" | "ar";

export default defineComponent({
    name: "wordsToNumber",
    mixins: [tag],
    props: {
        words: {
            type: String,
            required: true
        },
        digits: {
            type: String,
            default: "en",
            validator: (value: string) => ["en", "fa", "ar"].includes(value)
        },
        fuzzy: Boolean,
        addCommas: Boolean
    },
    computed: {
        convertToNumbers(): string {
            return WordsToNumber.convert(this.words, {
                digits: this.digits as WordsToNumberOptionsDigits,
                fuzzy: this.fuzzy,
                addCommas: this.addCommas
            });
        }
    },

    render() {
        const __SLOTS__ = getSlot(this, { number: this.convertToNumbers });
        return h(this.tag, __SLOTS__);
    }
});
