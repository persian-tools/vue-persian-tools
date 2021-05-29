import numberToWords from "../src/modules/numberToWords/index";

const Template = (args: any) => ({
    components: { numberToWords },
    setup() {
        return {
            val: args.val
        };
    },
    template: '<numberToWords :number="val" v-slot="{ words }">converted to: <b>{{ words }}</b></numberToWords>'
});

export const Default = Template.bind({});
Default.args = { val: "500,443" };

export default {
    title: "Modules/numberToWords",
    component: numberToWords,
    argTypes: {
        val: {
            name: "number",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Convert numbers to text.",
            table: {
                type: { summary: "string | number" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        }
    }
};
