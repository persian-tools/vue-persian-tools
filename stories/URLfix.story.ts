import URLfix from "../src/modules/URLfix/index";

const Template = (args: any) => ({
    components: { URLfix },
    setup() {
        return {
            url: args.val
        };
    },
    template: '<URLfix :url="url" v-slot="{ url }">fixed URL: <b>{{ url }}</b></URLfix>'
});

export const Default = Template.bind({});
Default.args = { val: "https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js" };

export default {
    title: "Modules/URLfix",
    component: URLfix,
    argTypes: {
        val: {
            name: "url",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "url that need to be fixed",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        },
    }
};
