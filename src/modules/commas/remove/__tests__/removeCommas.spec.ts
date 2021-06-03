import { mount } from "@vue/test-utils";
import removeCommas from "../index";

describe("addCommas", () => {
    const cmp = {
        props: ["val"],
        components: {
            removeCommas
        },
        template: "<div><removeCommas :number=val v-slot='{number}'> {{ number }}</removeCommas></div>"
    };
    it("should add remove commas from given number", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "3,500"
            }
        });

        expect(wrapper.html()).toMatch("3500");
    });
});
