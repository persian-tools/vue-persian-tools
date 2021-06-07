import { mount } from "@vue/test-utils";
import numberToWords from "../index";

describe("numberToWords", () => {
    const cmp = {
        props: ["val"],
        directives: {
            numberToWords
        },
        template: "<div v-number-to-words>{{val}}</div>"
    };
    it("should convert to word", async () => {
        const num = 500443;

        const wrapper = mount(cmp, {
            propsData: {
                val: num
            }
        });

        expect(wrapper.text()).toBe("پانصد هزار و چهار صد و چهل و سه");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        props: ["val"],
        directives: {
            numberToWords
        },
        template: '<input v-number-to-words.sync v-text="val" />'
    };
    it("should change in typing", async () => {
        const num = "500,443";

        const wrapper = mount(cmpSync, { propsData: { val: num } });
        const input = wrapper.find("input");
        expect(wrapper.text()).toBe("پانصد هزار و چهار صد و چهل و سه");

        await input.setValue("100");

        expect(wrapper.find("input").element.value).toBe("صد");
    });
});
