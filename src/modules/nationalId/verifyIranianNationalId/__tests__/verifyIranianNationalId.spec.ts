import { mount } from "@vue/test-utils";
import verifyIranianNationalId from "../index";

describe("verifyIranianNationalId", () => {
    const cmp = {
        props: ["val"],
        components: {
            verifyIranianNationalId
        },
        template: "<div><verifyIranianNationalId :nationalId=val v-slot='{ isValid }'>{{ isValid }}</verifyIranianNationalId></div>"
    };
    it("should return true if id is valid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "0499370899"
            }
        });
        expect(wrapper.html()).toMatch("true");

        await wrapper.setProps({
            val: "0790419904"
        });
        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if id is invalid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "0684159415"
            }
        });
        expect(wrapper.html()).toMatch("false");
    });
});
