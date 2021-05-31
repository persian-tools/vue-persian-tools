import { mount } from "@vue/test-utils";
import wordsToNumber from "../index";

describe("wordsToNumber", () => {
    const cmp = {
        props: ["val"],
        directives: {
            wordsToNumber
        },
        template: "<div v-words-to-number>{{val}}</div>"
    };
    it("should convert to number", async () => {
        const num = "منفی سه هزار";

        const wrapper = mount(cmp, {
            propsData: {
                val: num
            }
        });

        expect(wrapper.text()).toBe("-3000");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        props: ["val"],
        directives: {
            wordsToNumber
        },
        template: '<input v-words-to-number.sync v-text="val" />'
    };
    it("should not change in typing", async () => {
        const num = "چهارصد پنجاه هزار";

        const wrapper = mount(cmpSync, { propsData: { val: num } });
        const input = wrapper.find("input");
        expect(wrapper.text()).toBe("450000");

        await input.setValue("صد");

        expect(wrapper.find("input").element.value).toBe("صد");
    });
});
