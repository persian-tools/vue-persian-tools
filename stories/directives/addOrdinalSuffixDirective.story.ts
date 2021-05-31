import addOrdinalSuffix from "../../src/directives/addOrdinalSuffix/index";

const Template = (args: any) => ({
    directives: { addOrdinalSuffix: addOrdinalSuffix },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Number:</strong> {{text}}</div>
        <br />
        <div><strong>Ordinal number:</strong> <span v-add-ordinal-suffix>{{text}}</span></div>
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "چهل و پنج" };

export default {
    title: "Directives/addOrdinalSuffix",
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Add Ordinal suffix to numbers.",
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
