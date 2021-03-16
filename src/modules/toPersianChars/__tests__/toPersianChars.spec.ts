import { mount } from "@vue/test-utils";
import toPersianChars from "../index";

describe("hasPersian", () => {
    const cmp = {
        props: ["val"],
        components: {
            toPersianChars
        },
        template: "<div><toPersianChars :str=val v-slot='{ text }'>{{ text }}</toPersianChars></div>"
    };
    it("should return true if text contains persian values", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "علي"
            }
        });
        expect(wrapper.html()).toMatch("علی");
    });
});
