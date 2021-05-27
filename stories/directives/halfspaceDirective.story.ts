import halfSpace from "../../src/directives/halfSpace/index";

const Template = (args: any) => ({
    directives: { halfSpace: halfSpace },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Text:</strong> {{text}}</div>
        <br />
        <div><strong>Fixed text:</strong> <span v-half-space>{{text}}</span></div>
        <br />
        <input :value="text" v-half-space.sync />
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "نمی خواهی درخت ها را ببینیم؟" };

export default {
    title: "Directives/halfSpace",
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Replace spaces for given text with halfspace.",
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
