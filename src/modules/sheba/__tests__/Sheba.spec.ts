import { ShebaResult } from "@persian-tools/persian-tools/build/modules/sheba";
import { mount } from "@vue/test-utils";
import Sheba from "../index";

describe("Sheba validate", () => {
    const cmp = {
        props: ["val"],
        components: {
            Sheba
        },
        template: "<div><Sheba :shebaCode=val v-slot='{ isValid }'>{{ isValid }}</Sheba></div>"
    };
    it("should return true if sheba is valid", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "IR820540102680020817909002"
            }
        });
        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if sheba is not valid", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "IR01234567890123456789" // falsy sheba
            }
        });
        expect(wrapper.html()).toMatch("false");
    });
});

describe("Sheba info(recognize)", () => {
    const cmp = {
        props: ["val"],
        components: {
            Sheba
        },
        template: "<div><Sheba :shebaCode=val v-slot='{ info }'>{{ info }}</Sheba></div>"
    };

    const dummyInfo: ShebaResult = {
        nickname: "parsian",
        name: "Parsian Bank",
        persianName: "بانک پارسیان",
        code: "054",
        accountNumberAvailable: true,
        accountNumber: "020817909002",
        formattedAccountNumber: "002-00817909-002"
    };
    it("should return info if sheba is valid", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "IR820540102680020817909002"
            }
        });
        expect(JSON.parse(wrapper.text())).toEqual(dummyInfo);
    });

    it("should return null(empty) if sheba is not valid", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "IR01234567890123456789" // falsy sheba
            }
        });
        expect(wrapper.html()).toBe("<div><span></span></div>");
    });
});
