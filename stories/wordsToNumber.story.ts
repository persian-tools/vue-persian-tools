import wordsToNumber from "../src/modules/wordsToNumber/index";

const Template = (args: any) => ({
    components: { wordsToNumber },
    setup() {
        return {
            val: args.val,
            addCommas: args.addCommas,
            fuzzy: args.fuzzy,
            digits: args.digits
        };
    },
    template: '<wordsToNumber :words="val" :fuzzy=fuzzy :addCommas=addCommas :digits=digits v-slot="{ number }">converted to: <b>{{ number }}</b></wordsToNumber>'
});

export const Default = Template.bind({});
Default.args = { val: "دوازده هزار بیست دو", digits: false, fuzzy: false, addCommas: false };

export default {
    title: "Modules/wordsToNumber",
    component: wordsToNumber,
    argTypes: {
        val: {
            name: "words",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Convert words to number.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        },
        digits: {
            name: "digits",
            type: { name: "string", required: true },
            defaultValue: "en",
            description: "Convert words to digits in given language.",
            table: {
                type: { summary: "fa | en | ar" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "radio",
                options: ["en", "fa", "ar"]
            }
        },
        fuzzy: {
            name: "fuzzy",
            type: { name: "Boolean", required: true },
            defaultValue: false,
            description: "Fix typo in the Persian words by using levenshtein algorithm.",
            table: {
                type: { summary: "Boolean" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "boolean"
            }
        },
        addCommas: {
            name: "addCommas",
            type: { name: "Boolean", required: true },
            defaultValue: false,
            description: "Commas will be added to the Result.",
            table: {
                type: { summary: "Boolean" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "boolean"
            }
        }
    }
};
