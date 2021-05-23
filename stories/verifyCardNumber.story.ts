import verifyCardNumber from "../src/modules/bank/verifyCardNumber/index";

const Template = (args: any) => ({
    components: { verifyCardNumber },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<verifyCardNumber :digits="text" v-slot="{ isValid }">
    is given number valid: <b>{{ isValid }}</b>
    </verifyCardNumber>`
});

export const Default = Template.bind({});
Default.args = { val: "6037701689095443" };

export default {
    title: "Modules/verifyCardNumber",
    component: verifyCardNumber,
    argTypes: {
        val: {
            name: "digits",
            type: { name: "number", required: true },
            defaultValue: null,
            description: "validate bank number.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "number"
            }
        }
    }
};
