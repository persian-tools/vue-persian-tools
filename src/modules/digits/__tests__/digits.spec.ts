import { mount } from "@vue/test-utils";
import digits from "../index";

describe("digits", () => {
    const cmp = {
        props: ["val", "convert"],
        components: {
            digits
        },
        template: "<div><digits :number=val :convert='convert' v-slot='{value}'> {{ value }}</digits></div>"
    };
    it("should convert from en to fa", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                convert: "enFa",
                val: "3500"
            }
        });

        expect(wrapper.html()).toMatch("۳۵۰۰");
    });

    it("should convert from fa to en", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                convert: "faEn",
                val: "۳۵۰۰"
            }
        });

        expect(wrapper.html()).toMatch("3500");
    });

    it("should convert from en to ar", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                convert: "enAr",
                val: "600"
            }
        });

        expect(wrapper.html()).toMatch("٦۰۰");
    });

    it("should convert from ar to fa", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                convert: "arFa",
                val: "٦۰۰"
            }
        });

        expect(wrapper.html()).toMatch("۶۰۰");
    });

    it("should convert from ar to en", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                convert: "arEn",
                val: "٥"
            }
        });

        expect(wrapper.html()).toMatch("5");
    });
});
