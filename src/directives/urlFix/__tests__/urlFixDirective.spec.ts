import { mount } from "@vue/test-utils";
import urlFix from "../index";

describe("urlFix", () => {
    const cmp = {
        props: ["val"],
        directives: {
            urlFix
        },
        template: "<div v-url-fix>{{val}}</div>"
    };
    it("should fix url", async () => {
        const url = `https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js`;

        const wrapper = mount(cmp, {
            propsData: {
                val: url
            }
        });

        expect(wrapper.text()).toBe("https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-botworks.js");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        directives: {
            urlFix
        },
        template: "<input v-url-fix.sync />"
    };
    it("should fix url in typing", async () => {
        const url = `https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js`;

        const wrapper = mount(cmpSync);
        const input = wrapper.find("input");
        await input.setValue(url);

        expect(wrapper.find("input").element.value).toBe("https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-botworks.js");
    });
});
