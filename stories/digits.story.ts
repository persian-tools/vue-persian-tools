import digits from "../src/modules/digits/index";

const Template = (args: any) => ({
    components: { digits },
    setup() {
        return {
            val: args.val,
            convert: args.convert
        };
    },
    template: '<digits :number=val :convert=convert v-slot="{ value }">converted to: {{ value }}</digits>'
});

export const Default = Template.bind({});
Default.args = { val: "3500", convert: "enFa"};

export default {
    title: "Modules/digits",
    component: digits,
    argTypes: {
        val: {
            name: "number",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "convert digits to given language",
            table: {
                type: { summary: "string | number" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        },
        convert: {
            name: "convert",
            type: { name: "string", required: true },
            defaultValue: "en",
            description: "language to convert.",
            table: {
                type: { summary: "enFa | enAr | faEn | arFa | arEn" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "radio",
                options: ["enFa", "enAr", "faEn", "arFa", "arEn"]
            }
        }
    }
};
