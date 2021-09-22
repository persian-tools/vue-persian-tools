import plate from "../src/modules/plate/index";

const Template = (args: any) => ({
    components: { plate },
    setup() {
        return {
            val: args.val
        };
    },
    template: `<div><plate :number=val v-slot="{ info, isValid }">
                            <div>
                                <h3>plate info:</h3>
                                <p>type: <b>{{ info.type }}</b></p>
                                <p>template: <b>{{ info.template }}</b></p>
                                <p>details: <b>{{ info.details }}</b></p>
                                <p>province: <b>{{ info.province }}</b></p>
                                <p>category: <b>{{ info.category }}</b></p>
                            </div>
                            <br />
                            <span>is plate valid: <b>{{ isValid }}</b></span>
                        </plate></div>`
});

export const Default = Template.bind({});
Default.args = { val: "12D45147" };

export default {
    title: "Modules/plate",
    component: plate,
    argTypes: {
        val: {
            name: "number",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "plate number",
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
