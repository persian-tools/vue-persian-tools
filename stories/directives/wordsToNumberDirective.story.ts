import wordsToNumber from "../../src/directives/wordsToNumber/index";

const Template = (args: any) => ({
    directives: { wordsToNumber: wordsToNumber },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Text:</strong> {{text}}</div>
        <br />
        <div><strong>Number:</strong> <span v-words-to-number>{{text}}</span></div>
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
        }
    }
};
