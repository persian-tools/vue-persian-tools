import getPlaceByIranNationalId from "../src/modules/nationalId/getPlaceByIranNationalId/index";

const Template = (args: any) => ({
    components: { getPlaceByIranNationalId },
    setup() {
        return {
            text: args.val
        };
    },
    template: `<getPlaceByIranNationalId :nationalId="text" v-slot="{ city, codes, province }">
        city: <b> {{ city || "invalid" }} </b> <br />
        province: <b> {{ province || "invalid" }} </b> <br />
        codes: <b> {{ codes || "invalid" }} </b>
    </getPlaceByIranNationalId>`
});

export const Default = Template.bind({});
Default.args = { val: "0084575948" };

export default {
    title: "Modules/getPlaceByIranNationalId",
    component: getPlaceByIranNationalId,
    argTypes: {
        val: {
            name: "nationalId",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "return info for given national id.",
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
