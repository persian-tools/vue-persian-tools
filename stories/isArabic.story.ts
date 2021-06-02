import isArabic from "../src/modules/isArabic/index";

const generateRegex = (regString: string): RegExp => {
    // convert user input to regex (only for storybook)
    const match = regString.match(new RegExp("^/(.*?)/([gimy]*)$"));
    return new RegExp(match[1], match[2]);
};

const Template = (args: any) => ({
    components: { isArabic },
    setup() {
        const regex = generateRegex(args.pattern);
        return {
            text: args.val.replace(/\s/g, ""),
            trim: regex
        };
    },
    template: '<isArabic :str="text" :trimPattern="trim" v-slot="{isArabic}">is given text arabic: <b>{{ isArabic }}</b></isArabic>'
});

export const Default = Template.bind({});
Default.args = { val: "أكد رئيس اللجنة العسكرية الممثلة لحكومة الوفاق الوطني في ليبيا أحمد علي أبو شحمة، أن اللجنة لا تستطيع تنفيذ خطتها لإخراج العناصر الأجنبية من أراضي البلاد.", pattern: `/["'-+()؟\s.]/g`};

export default {
    title: "Modules/isArabic",
    component: isArabic,
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "checks if given value is arabic or not",
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
