import halfSpace from "../src/modules/halfSpace/index";

const Template = (args: any) => ({
    components: { halfSpace },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<halfSpace :str="text" v-slot="{ text }"><b>{{ text }}</b></halfSpace>'
});

export const Default = Template.bind({});
Default.args = { val: "نمی     ‌خواهی    درخت ها    را    ببینیم؟" };

export default {
    title: "Modules/halfSpace",
    component: halfSpace,
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Replace spaces for given text with halfspace.",
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
