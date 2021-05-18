import { mount } from "@vue/test-utils";
import addOrdinalSuffix from "../index";

describe("addOrdinalSuffix", () => {
    const cmp = {
        props: ["val"],
        components: {
            addOrdinalSuffix
        },
        template: "<div><addOrdinalSuffix :number=val v-slot='{ text }'>{{ text }}</addOrdinalSuffix></div>"
    };
    it("Ordinal suffix", async () => {
        const str = "چهل و سه";

        const wrapper = mount(cmp, {
            propsData: {
                val: str
            }
        });

        expect(wrapper.text()).toBe("چهل و سوم");

        await wrapper.setProps({
            val: "سی"
        });
        await (wrapper.vm as any).$nextTick();

        expect(wrapper.text()).toBe("سی اُم");
    });
});
