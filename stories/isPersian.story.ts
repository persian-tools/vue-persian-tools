import isPersian from "../src/modules/isPersian/index";

const Template = (args: any) => ({
    components: { isPersian },
    setup() {
        // convert user input to regex (only for storybook)
        const match = args.pattern.match(new RegExp("^/(.*?)/([gimy]*)$"));
        const regex = new RegExp(match[1], match[2]);
        return {
            text: args.val,
            trim: regex
        };
    },
    template: '<is-persian :str="text" :trimPattern="trim" v-slot="{isPersian}">is given text persian: <b>{{ isPersian }}</b></is-persian>'
});

export const Default = Template.bind({});
Default.args = { val: "این یک متن فارسی است", pattern: `/["'-+()؟\s.]/g` };

export default {
    title: "Modules/isPersian",
    component: isPersian,
    argTypes: {
        val: {
            name: "str",
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
        },

        pattern: {
            name: "trimPattern",
            type: { name: "string", required: false },
            defaultValue: null,
            description: "Pattern of characters which you want to trim from the string e.g. '-+. ()'",
            table: {
                type: { summary: "RegExp" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        }
    }
};
