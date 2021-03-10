import { mount } from "@vue/test-utils";
import URLfix from "../index";

describe("URLfix", () => {
    const cmp = {
        props: ["url"],
        components: {
            url: URLfix
        },
        template: "<div><url :url=url v-slot='{url}'>{{ url }}</url></div>"
    };
    it("should fix url", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                url: `https://fa.wikipedia.org/wiki/%D9%85%D8%AF%DB%8C%D8%A7%D9%88%DB%8C%DA%A9%DB%8C:Gadget-Extra-Editbuttons-botworks.js`
            }
        });
        expect(wrapper.html()).toMatch("https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-botworks.js");

        await wrapper.setProps({
            url: "random text"
        });

        expect(wrapper.html()).toMatch("random text");
    });
});
