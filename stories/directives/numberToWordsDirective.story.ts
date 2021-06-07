import numberToWords from "../../src/directives/numberToWords/index";

const Template = (args: any) => ({
    directives: { numberToWords: numberToWords },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Number:</strong> {{text}}</div>
        <br />
        <div><strong>Text:</strong> <span v-number-to-words>{{text}}</span></div>
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "500,443" };

export default {
    title: "Directives/numberToWords",
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Convert numbers to text.",
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
