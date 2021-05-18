import addOrdinalSuffix from "../src/modules/addOrdinalSuffix/index";

const Template = (args: any) => ({
    components: { addOrdinalSuffix },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<addOrdinalSuffix :number="text" v-slot="{ text }"><b>{{ text }}</b></addOrdinalSuffix>'
});

export const Default = Template.bind({});
Default.args = { val: "چهل و پنج" };

export default {
    title: "Modules/addOrdinalSuffix",
    component: addOrdinalSuffix,
    argTypes: {
        val: {
            name: "number",
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
