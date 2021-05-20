import isPersian from "../src/modules/isPersian/index";

const generateRegex = (regString: string): RegExp => {
    // convert user input to regex (only for storybook)
    const match = regString.match(new RegExp("^/(.*?)/([gimy]*)$"));
    return new RegExp(match[1], match[2]);
};

const Template = (args: any) => ({
    components: { isPersian },
    setup() {
        const regex = generateRegex(args.pattern);
        return {
            text: args.val.replace(/\s/g, ""),
            trim: regex,
            complex: args.complex
        };
    },
    template: '<is-persian :str="text" :isComplex="complex" :trimPattern="trim" v-slot="{isPersian}">is given text persian: <b>{{ isPersian }}</b></is-persian>'
});

export const Default = Template.bind({});
Default.args = { val: "این یک متن فارسی است", pattern: `/["'-+()؟\s.]/g`, complex: false };

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
        },

        complex: {
            name: "isComplex",
            type: { name: "string", required: false },
            defaultValue: false,
            description: "accepts some of regular arabic characters which are commons in persian texts.",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" }
            },
            control: {
                type: "boolean"
            }
        }
    }
};
