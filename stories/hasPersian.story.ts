import hasPersian from "../src/modules/hasPersian/index";

const Template = (args: any) => ({
    components: { hasPersian },
    setup() {
        return {
            text: args.val
        };
    },
    template: '<hasPersian :text="text" v-slot="{ hasPersian }">is string contains persian chars: <b>{{ hasPersian }}</b></hasPersian>'
});

export const Default = Template.bind({});
Default.args = { val: "hello متن فارسی" };

export default {
    title: "Modules/hasPersian",
    component: hasPersian,
    argTypes: {
        val: {
            name: "text",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Check if string includes persian alphabet.",
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