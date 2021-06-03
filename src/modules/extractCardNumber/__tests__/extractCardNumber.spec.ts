import { mount } from "@vue/test-utils";
import extractCardNumber from "../index";

describe("extractCardNumber", () => {
    const mockString = `شماره کارتم رو برات نوشتم:
    6219-8610-3452-9007
    اینم یه شماره کارت دیگه ای که دارم
    5022291070873466
    ۵۰۲۲۲۹۱۰۸۱۸۷۳۴۶۶
    ۵۰۲۲-۲۹۱۰-۷۰۸۷-۳۴۶۶`;

    const cmp = {
        props: ["val"],
        components: {
            extractCardNumber
        },
        template: "<div><extractCardNumber :str=val v-slot='{ cards, valid }'><span id='span1'>{{ cards }}</span><span id='span2'>{{ valid }}</span></extractCardNumber></div>"
    };

    it("should return all extracted cards", () => {
        const result = [
            { pure: "6219861034529007", base: "6219-8610-3452-9007", index: 1, isValid: true, bankName: "بانک سامان" },
            { pure: "5022291070873466", base: "5022291070873466", index: 2, isValid: true, bankName: "بانک پاسارگاد" },
            { pure: "5022291081873466", base: "۵۰۲۲۲۹۱۰۸۱۸۷۳۴۶۶", index: 3, isValid: false, bankName: "بانک پاسارگاد" },
            { pure: "5022291070873466", base: "۵۰۲۲-۲۹۱۰-۷۰۸۷-۳۴۶۶", index: 4, isValid: true, bankName: "بانک پاسارگاد" }
        ];

        const wrapper = mount(cmp, {
            propsData: {
                val: mockString
            }
        });

        const outputValue = JSON.parse(wrapper.find("#span1").text());
        expect(outputValue).toEqual(result);
    });

    it("should return all valid cards", () => {
        const result = [
            { pure: "6219861034529007", base: "6219-8610-3452-9007", index: 1, isValid: true, bankName: "بانک سامان" },
            { pure: "5022291070873466", base: "5022291070873466", index: 2, isValid: true, bankName: "بانک پاسارگاد" },
            { pure: "5022291070873466", base: "۵۰۲۲-۲۹۱۰-۷۰۸۷-۳۴۶۶", index: 4, isValid: true, bankName: "بانک پاسارگاد" }
        ];

        const wrapper = mount(cmp, {
            propsData: {
                val: mockString
            }
        });

        const outputValue = JSON.parse(wrapper.find("#span2").text());
        expect(outputValue).toEqual(result);
    });
});
