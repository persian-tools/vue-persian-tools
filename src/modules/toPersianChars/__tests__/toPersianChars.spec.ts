import { mount } from "@vue/test-utils";
import toPersianChars from "../index";

describe("toPersianChars", () => {
    const cmp = {
        props: ["val"],
        components: {
            toPersianChars
        },
        template: "<div><toPersianChars :str=val v-slot='{ text }'>{{ text }}</toPersianChars></div>"
    };
    it("should convert to persian char", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "علي"
            }
        });
        expect(wrapper.html()).toMatch("علی");
    });
});
