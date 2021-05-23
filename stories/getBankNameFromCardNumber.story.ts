import getBankNameFromCardNumber from "../src/modules/bank/getBankNameFromCardNumber/index";

const Template = (args: any) => ({
    components: { getBankNameFromCardNumber },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<getBankNameFromCardNumber :digits="text" v-slot="{ bankName }">
    name of the bank for given number: <b>{{ bankName }}</b>
    </getBankNameFromCardNumber>`
});

export const Default = Template.bind({});
Default.args = { val: "6037701689095443" };

export default {
    title: "Modules/getBankNameFromCardNumber",
    component: getBankNameFromCardNumber,
    argTypes: {
        val: {
            name: "digits",
            type: { name: "number", required: true },
            defaultValue: null,
            description: "get bank name for given number.",
            table: {
                type: { summary: "number | string" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "number"
            }
        }
    }
};
