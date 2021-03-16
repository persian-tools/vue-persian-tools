import toPersianChars from "../src/modules/toPersianChars/index";

const Template = (args: any) => ({
    components: { toPersianChars },
    setup() {
        return {
            val: args.val
        };
    },
    template: '<toPersianChars :str="val" v-slot="{ text }">converted to: <b>{{ text }}</b></toPersianChars>'
});

export const Default = Template.bind({});
Default.args = { val: "علي" };

export default {
    title: "Modules/toPersianChars",
    component: toPersianChars,
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Description: Replaces all instances of ي and ك withی and ک, respectively. It should not make any ch anges to Arabic text surrounded by appropriate templates.",
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
