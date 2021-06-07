import { mount } from "@vue/test-utils";
import wordsToNumber from "../index";

describe("wordsToNumber", () => {
    const cmp = {
        props: ["val", "digits"],
        directives: {
            wordsToNumber
        },
        template: "<div v-words-to-number:[digits]>{{val}}</div>"
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

    it("should convert to number with given digits option", () => {
        const num = "منفی سه هزار";

        const wrapper = mount(cmp, {
            propsData: {
                val: num,
                digits: "fa"
            }
        });

        expect(wrapper.text()).toMatch("-۳۰۰۰");
    });

    const cmpCommas = {
        props: ["val"],
        directives: {
            wordsToNumber
        },
        template: "<div v-words-to-number.addCommas>{{val}}</div>"
    };
    it("should add commas to number", () => {
        const wrapper = mount(cmpCommas, {
            propsData: {
                val: "چهارصد پنجاه هزار"
            }
        });
        expect(wrapper.text()).toMatch("450,000");
    });

    const cmpFuzzy = {
        props: ["val"],
        directives: {
            wordsToNumber
        },
        template: "<div v-words-to-number.fuzzy>{{val}}</div>"
    };
    it("should work with fuzzy model", () => {
        const wrapper = mount(cmpFuzzy, {
            propsData: {
                val: "ضد و بنچاه و دو"
            }
        });
        expect(wrapper.text()).toMatch("152");
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
    it("should change in typing", async () => {
        const num = "چهارصد پنجاه هزار";

        const wrapper = mount(cmpSync, { propsData: { val: num } });
        const input = wrapper.find("input");
        expect(wrapper.text()).toBe("450000");

        await input.setValue("صد");

        expect(wrapper.find("input").element.value).toBe("100");
    });
});
