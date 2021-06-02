import { mount } from "@vue/test-utils";
import addCommas from "../index";

describe("addCommas", () => {
    const cmp = {
        props: ["val"],
        components: {
            addCommas
        },
        template: "<div><addCommas :number=val v-slot='{number}'> {{ number }}</addCommas></div>"
    };
    it("should add commas to given number", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "3500"
            }
        });

        expect(wrapper.html()).toMatch("3,500");
    });
});
