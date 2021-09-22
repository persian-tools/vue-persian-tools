import timeAgo from "../src/modules/timeAgo/index";

const Template = (args: any) => ({
    components: { timeAgo },
    setup() {
        return {
            val: args.val
        };
    },
    template: `<div><timeAgo :date=val v-slot="{ time }">{{ time }}</timeAgo></div>`
});

export const Default = Template.bind({});
Default.args = { val: "1400/04/07 18:00:00" };

export default {
    title: "Modules/timeAgo",
    component: timeAgo,
    argTypes: {
        val: {
            name: "date",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "a date string in yyyy/mm/dd hh:mm:ss format",
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
