import extractCardNumber from "../src/modules/extractCardNumber/index";

const Template = (args: any) => ({
    components: { extractCardNumber },
    setup() {
        return {
            val: args.val
        };
    },
    template: `<extractCardNumber :str="val" v-slot="{ cards, valid }">
                    <ul>
                        <h4>all extracted cards: </h4>
                        <li v-for="(card, i) in cards" :key="i">
                            <p>index: {{ card.index }}</p>
                            <p>pure: {{ card.pure }}</p>
                            <p>base: {{ card.base }}</p>
                            <p>isValid: {{ card.isValid }}</p>
                            <hr />
                        </li>
                        <br />
                        <br />
                        <h4>all valid cards: </h4>
                        <li v-for="(card, i) in valid" :key="i">
                            <p>index: {{ card.index }}</p>
                            <p>pure: {{ card.pure }}</p>
                            <p>base: {{ card.base }}</p>
                            <p>isValid: {{ card.isValid }}</p>
                            <hr />
                        </li>
                    </ul>
                    <br />
                </extractCardNumber>`
});

export const Default = Template.bind({});
Default.args = {
    val: `شماره کارتم رو برات نوشتم:
6219-8610-3452-9007
اینم یه شماره کارت دیگه ای که دارم
5022291070873466
۵۰۲۲۲۹۱۰۸۱۸۷۳۴۶۶
۵۰۲۲-۲۹۱۰-۷۰۸۷-۳۴۶۶`
};

export default {
    title: "Modules/extractCardNumber",
    component: extractCardNumber,
    argTypes: {
        val: {
            name: "str",
            type: { name: "string", required: true },
            defaultValue: null,
            description: "extract card numbers from given text.",
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
