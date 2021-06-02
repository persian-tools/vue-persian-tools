import bill from "../src/modules/Bill/index";

const txtToJson = (objString) => {
    return objString.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
        return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
    });
}

const Template = (args: any) => ({
    components: { bill },
    setup() {
        const _val = JSON.parse(txtToJson(args.val))
        return {
            val: _val
        };
    },
    template: `<div><bill :bill=val v-slot="{ result, amount, type, isBillValid, isBillIdValid, isBillPaymentValid }">
                            <p id="s1">result of bill: <h5>{{ result }}</h5></p>
                            <p id="s2">amount: <h5>{{ amount }}</h5></p>
                            <p id="s3">bill type: <h5>{{ type }}</h5></p>
                            <p id="s4">is bill valid: <h5>{{ isBillValid }}</h5> </p>
                            <p id="s5">is bill id valid: <h5>{{ isBillIdValid }}</h5> </p>
                            <p id="s6">is bill payment id valid: <h5>{{ isBillPaymentValid }}</h5> </p>
                        </bill></div>`
});

export const Default = Template.bind({});
Default.args = { val: `{ billId: 7748317800142, paymentId: 1770160, currency: "rial" }` };

export default {
    title: "Modules/bill",
    component: bill,
    argTypes: {
        val: {
            name: "bill",
            type: { name: "object", required: true },
            defaultValue: null,
            description: "your bill object.",
            table: {
                type: { summary: "object" },
                defaultValue: { summary: "null" }
            },
            control: {
                type: "text"
            }
        }
    }
};
