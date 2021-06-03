import addCommas from "../src/modules/commas/add/index";
import removeCommas from "../src/modules/commas/remove/index";

const Template = (args: any) => ({
    components: { addCommas, removeCommas },
    setup() {
        return {
            add: args.add,
            remove: args.remove
        };
    },
    template: `
    <div>
     <h4>add commas to number:</h4>
     <addCommas :number=add v-slot="{ number }"> {{ number }}</addCommas>
     <hr />
     <h4>remove commas from number:</h4>
     <removeCommas :number=remove v-slot="{ number }">{{ number }}</removeCommas>
    </div>
    `
});

export const Default = Template.bind({});
Default.args = { add: "96312", remove: "12,567,980" };

export default {
    title: "Modules/commas",
    argTypes: {
        add: {
            name: "add",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "add commas to number",
            table: {
                type: { summary: "string | number" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        },
        remove: {
            name: "remove",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "remove commas from number",
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
