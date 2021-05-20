import verifyIranianNationalId from "../src/modules/nationalId/verifyIranianNationalId/index";

const Template = (args: any) => ({
    components: { verifyIranianNationalId },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<verifyIranianNationalId :nationalId="text" v-slot="{ isValid }"><b>is given nation id valid: {{ isValid }}</b></verifyIranianNationalId>'
});

export const Default = Template.bind({});
Default.args = { val: "0963695398" };

export default {
    title: "Modules/verifyIranianNationalId",
    component: verifyIranianNationalId,
    argTypes: {
        val: {
            name: "nationalId",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "national id for validation.",
            table: {
                type: { summary: "string or number" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        }
    }
};
