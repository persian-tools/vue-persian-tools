import removeOrdinalSuffix from "../src/modules/removeOrdinalSuffix/index";

const Template = (args: any) => ({
    components: { removeOrdinalSuffix },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<removeOrdinalSuffix :number="text" v-slot="{ text }"><b>{{ text }}</b></removeOrdinalSuffix>'
});

export const Default = Template.bind({});
Default.args = { val: "چهل و سوم" };

export default {
    title: "Modules/removeOrdinalSuffix",
    component: removeOrdinalSuffix,
    argTypes: {
        val: {
            name: "number",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "remove Ordinal suffix from numbers.",
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
