import { mount } from "@vue/test-utils";
import isPersian from "../index";

describe("isPersian", () => {
    const cmp = {
        props: ["txt"],
        components: {
            fa: isPersian
        },
        template: "<div><fa :args=txt v-slot='{isPersian}'>{{ isPersian }}</fa></div>"
    };
    it("should return true if is given text is Persian", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                txt: "متن فارسی"
            }
        });
        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if is given text is not Persian", async () => {
        const wrapper1 = mount(cmp, {
            propsData: {
                txt: "english text"
            }
        });
        expect(wrapper1.html()).toMatch("false");

        const wrapper2 = mount(cmp, {
            propsData: {
                txt: "こんにちは世界"
            }
        });
        expect(wrapper2.html()).toMatch("false");
    });

    it("should render isPersian with given html tag", () => {
        const cmp = {
            components: {
                fa: isPersian
            },
            template: "<div><fa tag='p' args='random text' v-slot='{isPersian}'>{{ isPersian }}</fa></div>"
        };

        const wrapper = mount(cmp);
        expect(wrapper.html()).toMatch("<p>false</p>");
    });
});
