import { mount } from "@vue/test-utils";
import removeOrdinalSuffix from "../index";

describe("removeOrdinalSuffix", () => {
    const cmp = {
        props: ["val"],
        directives: {
            removeOrdinalSuffix
        },
        template: "<div v-remove-ordinal-suffix>{{val}}</div>"
    };
    it("should remove ordianl suffix", async () => {
        const num = "چهل و سوم";

        const wrapper = mount(cmp, {
            propsData: {
                val: num
            }
        });

        expect(wrapper.text()).toBe("چهل و سه");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        props: ["val"],
        directives: {
            removeOrdinalSuffix
        },
        template: '<input v-remove-ordinal-suffix.sync v-text="val" />'
    };
    it("should not change in typing", async () => {
        const num = `سی اُم`;

        const wrapper = mount(cmpSync, { propsData: { val: num } });
        const input = wrapper.find("input");
        expect(wrapper.text()).toBe("سی");

        await input.setValue("صدم");

        expect(wrapper.find("input").element.value).toBe("صدم");
    });
});
