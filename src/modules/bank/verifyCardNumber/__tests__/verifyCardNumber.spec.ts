import { mount } from "@vue/test-utils";
import verifyCardNumber from "../index";

describe("verifyCardNumber", () => {
    const cmp = {
        props: ["val"],
        components: {
            verifyCardNumber
        },
        template: "<div><verifyCardNumber :digits=val v-slot='{ isValid }'>{{ isValid }}</verifyCardNumber></div>"
    };
    it("should return true if given card id is true", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: 6037701689095443
            }
        });

        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if given id is invalid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: 99999
            }
        });

        expect(wrapper.html()).toMatch(`false`); // empty style
    });
});
