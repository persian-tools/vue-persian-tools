import { mount } from "@vue/test-utils";
import numberToWords from "../index";

describe("numberToWords", () => {
    const cmp = {
        props: ["num"],
        components: {
            numberToWords
        },
        template: "<div><numberToWords :number=num v-slot='{words}'>{{ words }}</numberToWords></div>"
    };
    it("should convert to words", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                num: 500443
            }
        });
        expect(wrapper.html()).toMatch("پانصد هزار و چهار صد و چهل و سه");

        await wrapper.setProps({
            txt: "500,443"
        });
        expect(wrapper.html()).toMatch("پانصد هزار و چهار صد و چهل و سه");
    });
});
