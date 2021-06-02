import phoneNumber from "../src/modules/phoneNumber/index";


const Template = (args: any) => ({
    components: { phoneNumber },
    setup() {
        return {
            val: args.val
        };
    },
    template: `<div><phoneNumber :number=val v-slot="{ details, isValid }">
                    <p id="s1">details: {{ details }}</p>
                    <p id="s2">is phone number valid: {{ isValid }}</p>
               </phoneNumber></div>`
});

export const Default = Template.bind({});
Default.args = { val: `09022002580` };

export default {
    title: "Modules/phoneNumber",
    component: phoneNumber,
    argTypes: {
        val: {
            name: "number",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "get info & validate phone numbers.",
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
