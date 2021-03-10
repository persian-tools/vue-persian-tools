import isPersian from "../src/modules/isPersian/index";

const Template = (args: any) => ({
    components: { isPersian },
    setup() {
        return { text: args.text };
    },
    template: '<is-persian :text="text" v-slot="{isPersian}">is given text persian: <b>{{ isPersian }}</b></is-persian>'
});

export const Default = Template.bind({});
Default.args = { text: "این یک متن فارسی است" };

export default {
    title: "Modules/isPersian",
    component: isPersian,
    argTypes: {
        text: {
            name: "text",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "checks if given value is persian or not",
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
