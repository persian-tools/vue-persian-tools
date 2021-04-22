import { mount } from "@vue/test-utils";
import halfSpace from "../index";

describe("halfSpace", () => {
    const cmp = {
        props: ["val"],
        directives: {
            halfSpace
        },
        template: "<div v-half-space>{{val}}</div>"
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

    const cmpSync = {
        directives: {
            halfSpace
        },
        template: "<input v-half-space.sync />"
    };
    it("should replace space with halfspace in typing", async () => {
        const str = "نمی ‌خواهی درخت ها را ببینیم؟";

        const wrapper = mount(cmpSync);
        const input = wrapper.find("input");
        await input.setValue(str);

        expect(wrapper.find("input").element.value).toBe("نمی‌خواهی درخت‌ها را ببینیم؟");
    });
});
