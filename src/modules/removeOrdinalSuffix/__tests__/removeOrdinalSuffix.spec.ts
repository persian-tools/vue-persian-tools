import { mount } from "@vue/test-utils";
import removeOrdinalSuffix from "../index";

describe("removeOrdinalSuffix", () => {
    const cmp = {
        props: ["val"],
        components: {
            removeOrdinalSuffix
        },
        template: "<div><removeOrdinalSuffix :number=val v-slot='{ text }'>{{ text }}</removeOrdinalSuffix></div>"
    };
    it("Ordinal suffix", async () => {
        const str = "چهل و سوم";

        const wrapper = mount(cmp, {
            propsData: {
                val: str
            }
        });

        expect(wrapper.text()).toBe("چهل و سه");

        await wrapper.setProps({
            val: "سی اُم"
        });
        await (wrapper.vm as any).$nextTick();

        expect(wrapper.text()).toBe("سی");
    });
});
