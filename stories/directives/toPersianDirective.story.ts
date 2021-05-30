import toPersian from "../../src/directives/toPersian/index";
const Template = (args: any) => ({
    directives: { toPersian: toPersian },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<div>
        <div><strong>Text:</strong> {{text}}</div>
        <br />
        <div><strong>Fixed text:</strong> <span v-to-persian>{{text}}</span></div>
        <br />
        <input :value="text" v-to-persian.sync />
    </div>`
});

export const Default = Template.bind({});
Default.args = { val: "علي كيك خورد." };

export default {
    title: "Directives/toPersian",
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "Description: Replaces all instances of ي and ك withی and ک, respectively. It should not make any ch anges to Arabic text surrounded by appropriate templates.",
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
