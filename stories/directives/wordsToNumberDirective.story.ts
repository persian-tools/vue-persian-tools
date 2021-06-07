import wordsToNumber from "../../src/directives/wordsToNumber/index";

const Template = (args: any) => ({
    directives: { wordsToNumber: wordsToNumber },
    setup() {
        return {
            text: args.val,
            digits: args.digits
        };
    },
    template: `<div>
        <div><strong>Text:</strong> {{text}}</div>
        <br />
        <div><strong>Number:</strong> <span v-words-to-number:[digits]>{{text}}</span></div>
        <br />
        <div><strong>Number with add Comma:</strong> <span v-words-to-number:[digits].addCommas>{{text}}</span></div>
        <br />
        <div><strong>Number with fuzzy modifier:</strong> <span v-words-to-number:[digits].fuzzy>{{text}}</span></div>
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "دوازده هزار بیست دو" };

export default {
    title: "Directives/wordsToNumber",
    argTypes: {
        val: {
            name: "str",
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
            defaultValue: null,
            description: "Convert words to digits in given language.",
            table: {
                type: { summary: "fa | en | ar" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "radio",
                options: ["en", "fa", "ar"]
            }
        }
    }
};
