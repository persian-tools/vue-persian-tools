import removeOrdinalSuffix from "../../src/directives/removeOrdinalSuffix/index";

const Template = (args: any) => ({
    directives: { removeOrdinalSuffix: removeOrdinalSuffix },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Ordinal number:</strong> {{text}}</div>
        <br />
        <div><strong>Number:</strong> <span v-remove-ordinal-suffix>{{text}}</span></div>
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "چهل و سوم" };

export default {
    title: "Directives/removeOrdinalSuffix",
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
