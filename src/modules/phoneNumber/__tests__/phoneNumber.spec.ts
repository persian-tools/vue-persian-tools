import { mount } from "@vue/test-utils";
import phoneNumber from "../index";

describe("phoneNumber", () => {
    const cmp = {
        props: ["val"],
        components: {
            phoneNumber
        },
        template: `<div><phoneNumber :number=val v-slot="{ details, isValid }">
                            <span id="s1">{{ details }}</span>
                            <span id="s2">{{ isValid }}</span>
                        </phoneNumber></div>`
    };

    const wrapper = mount(cmp, {
        propsData: {
            val: "09022002580"
        }
    });

    it("should return phone number details", () => {
        expect(JSON.parse(wrapper.find("#s1").text())).toEqual(
            expect.objectContaining({
                base: "کشوری",
                operator: "ایرانسل",
                type: ["permanent", "credit"]
            })
        );
    });

    it("should validate phone number", () => {
        expect(wrapper.find("#s2").text()).toBe("true");
    });

    it("should return false if phone number is not valid", async () => {
        await wrapper.setProps({
            val: "000000000"
        });
        expect(wrapper.find("#s2").text()).toBe("false");
    });
});
