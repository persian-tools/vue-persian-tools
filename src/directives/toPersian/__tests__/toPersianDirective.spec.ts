import { mount } from "@vue/test-utils";
import toPersian from "../index";

describe("toPersian", () => {
    const cmp = {
        props: ["val"],
        directives: {
            toPersian
        },
        template: "<div v-to-persian>{{val}}</div>"
    };
    it("should convert to persian chars", async () => {
        const text = `كيك`;

        const wrapper = mount(cmp, {
            propsData: {
                val: text
            }
        });

        expect(wrapper.text()).toBe("کیک");
    });
    it("should empty if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });

    const cmpSync = {
        directives: {
            toPersian
        },
        template: "<input v-to-persian.sync />"
    };
    it("should replace convert to persian chars in typing", async () => {
        const text = `كيك`;

        const wrapper = mount(cmpSync);
        const input = wrapper.find("input");
        await input.setValue(text);

        expect(wrapper.find("input").element.value).toBe("کیک");
    });
});
