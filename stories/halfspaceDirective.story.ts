import halfSpace from "../src/directives/halfSpace/index";

const Template = (args: any) => ({
    directives: { halfSpace },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<input :value="text" v-half-space.sync />'
});

export const Default = Template.bind({});
Default.args = { val: "نمی خواهی درخت ها را ببینیم؟" };

export default {
    title: "Directives/halfSpace",
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
