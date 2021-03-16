import Sheba from "../src/modules/sheba/index";

const Template = (args: any) => ({
    components: { Sheba },
    setup() {
        return {
            code: args.val
        };
    },
    template: `
    <Sheba :shebaCode="code" v-slot="{ isValid, info }">
        is sheba valid: <b>{{ isValid }}</b>
        <br />
        <br />
        <h3>info about sheba</h3>
        <div v-if="info">
            <p> nickname: {{ info.nickname }} </p>
            <p> name: {{ info.name }} </p>
            <p> persianName: {{ info.persianName }} </p>
            <p> code: {{ info.code }} </p>
            <p> accountNumberAvailable: {{ info.accountNumberAvailable }} </p>
        </div>
        <div v-else>
            invalid
        </div>
    </Sheba>
    `
});

export const Default = Template.bind({});
Default.args = { val: "IR820540102680020817909002" };

export default {
    title: "Modules/Sheba",
    component: Sheba,
    argTypes: {
        val: {
            name: "shebaCode",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "get info & validate iranian Sheba(IBAN)",
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
