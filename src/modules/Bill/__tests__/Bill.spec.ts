import { mount } from "@vue/test-utils";
import bill from "../index";

describe("bill", () => {
    const cmp = {
        props: ["val"],
        components: {
            bill
        },
        template: `<div><bill :bill=val v-slot="{ result, amount, type, isBillValid, isBillIdValid, isBillPaymentValid }">
                            <span id="s1">{{ result }}</span>
                            <span id="s2">{{ amount }}</span>
                            <span id="s3">{{ type }}</span>
                            <span id="s4">{{ isBillValid }} </span>
                            <span id="s5">{{ isBillIdValid }} </span>
                            <span id="s6">{{ isBillPaymentValid }} </span>
                        </bill></div>`
    };

    const wrapper = mount(cmp, {
        propsData: {
            val: { billId: 7748317800142, paymentId: 1770160, currency: "rial" }
        }
    });

    it("bill result", () => {
        const _expectedResult = {
            amount: 17000,
            type: "تلفن ثابت",
            barcode: "77483178001420001770160",
            isValid: true,
            isValidBillId: true,
            isValidBillPayment: true
        };

        const _calculatedResult = JSON.parse(wrapper.find("#s1").text());
        expect(_calculatedResult).toEqual(_expectedResult);
    });

    it("bill amount", () => {
        expect(wrapper.find("#s2").text()).toEqual((17000).toString());
    });

    it("bill type", () => {
        expect(wrapper.find("#s3").text()).toEqual("تلفن ثابت");
    });

    it("validate bill", () => {
        expect(wrapper.find("#s4").text()).toBeTruthy();
    });

    it("validate bill id", () => {
        expect(wrapper.find("#s5").text()).toBeTruthy();
    });

    it("validate bill payment id", () => {
        expect(wrapper.find("#s6").text()).toBeTruthy();
    });
});
