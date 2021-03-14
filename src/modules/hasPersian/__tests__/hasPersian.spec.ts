import { mount } from "@vue/test-utils";
import hasPersian from "../index";

describe("hasPersian", () => {
    const cmp = {
        props: ["val"],
        components: {
            hasPersian
        },
        template: "<div><hasPersian :text=val v-slot='{ hasPersian }'>{{ hasPersian }}</hasPersian></div>"
    };
    it("should return true if text contains persian values", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "hello متن فارسی"
            }
        });
        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if text contains persian values", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "no persian text here"
            }
        });

        expect(wrapper.html()).toMatch("false");
    });
});
