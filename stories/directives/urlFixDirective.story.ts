import urlFix from "../../src/directives/URLfix/index";
const Template = (args: any) => ({
    directives: { urlFix: urlFix },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>URL:</strong> {{text}}</div>
        <br />
        <div><strong>Fixed URL:</strong> <span v-url-fix>{{text}}</span></div>
        <br />
        <input :value="text" v-url-fix.sync />
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js" };

export default {
    title: "Directives/URLfix",
    argTypes: {
        val: {
            name: "str",
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
        }
    }
};
