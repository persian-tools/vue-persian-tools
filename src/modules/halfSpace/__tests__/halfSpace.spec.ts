import { mount } from "@vue/test-utils";
import halfSpace from "../index";

describe("halfSpace", () => {
    const cmp = {
        props: ["val"],
        components: {
            halfSpace
        },
        template: "<div><halfSpace :str=val v-slot='{ text }'>{{ text }}</halfSpace></div>"
    };
    it("should replace space with halfspace", async () => {
        const str = "نمی ‌خواهی درخت ها را ببینیم؟";

        const wrapper = mount(cmp, {
            propsData: {
                val: str
            }
        });

        expect(wrapper.text()).toBe("نمی‌خواهی درخت‌ها را ببینیم؟");
    });

    it("should be undefiend(empty) if prop is empty", () => {
        const wrapper = mount(cmp);

        expect(wrapper.text()).toBe("");
    });
});
