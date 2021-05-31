import { mount } from "@vue/test-utils";
import addOrdinalSuffix from "../index";

describe("addOrdinalSuffix", () => {
    const cmp = {
        props: ["val"],
        directives: {
            addOrdinalSuffix
        },
        template: "<div v-add-ordinal-suffix>{{val}}</div>"
    };
    it("should add ordianl suffix", async () => {
        const num = "چهل و سه";

        const wrapper = mount(cmp, {
            propsData: {
                val: num
            }
        });

        expect(wrapper.text()).toBe("چهل و سوم");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        props: ["val"],
        directives: {
            addOrdinalSuffix
        },
        template: '<input v-add-ordinal-suffix.sync v-text="val" />'
    };
    it("should not change in typing", async () => {
        const num = `سی`;

        const wrapper = mount(cmpSync, { propsData: { val: num } });
        const input = wrapper.find("input");
        expect(wrapper.text()).toBe("سی اُم");

        await input.setValue("صد");

        expect(wrapper.find("input").element.value).toBe("صد");
    });
});
