import { mount } from "@vue/test-utils";
import getBankNameFromCardNumber from "../index";

describe("getBankNameFromCardNumber", () => {
    const cmp = {
        props: ["val"],
        components: {
            getBankNameFromCardNumber
        },
        template: "<div><getBankNameFromCardNumber :digits=val v-slot='{ bankName }'>{{ bankName }}</getBankNameFromCardNumber></div>"
    };
    it("should return bank name if given card id is valid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: 6037701689095443
            }
        });

        expect(wrapper.html()).toMatch("بانک کشاورزی");
    });

    it("should return falsy if given id is invalid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: 99999
            }
        });

        expect(wrapper.html()).toMatch(``); // empty style
    });
});
