import { mount } from "@vue/test-utils";
import isArabic from "../index";

describe("isArabic", () => {
    const cmp = {
        props: ["txt"],
        components: {
            isArabic
        },
        template: "<div><isArabic :str=txt v-slot='{isArabic}'>{{ isArabic }}</isArabic></div>"
    };
    it("should return true if is given text is Arabic", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                txt: "العناصر الأجنبية"
            }
        });
        expect(wrapper.html()).toMatch("true");

        await wrapper.setProps({
            txt: "أكد رئيس اللجنة العسكرية الممثلة لحكومة الوفاق الوطني في ليبيا أحمد علي أبو شحمة، أن اللجنة لا تستطيع تنفيذ خطتها لإخراج العناصر الأجنبية من أراضي البلاد."
        });

        expect(wrapper.html()).toMatch("true");
    });

    it("should return false if is given text is not Arabic", async () => {
        const wrapper1 = mount(cmp, {
            propsData: {
                txt: "english text"
            }
        });
        expect(wrapper1.html()).toMatch("false");

        const wrapper2 = mount(cmp, {
            propsData: {
                txt: "こんにちは世界"
            }
        });
        expect(wrapper2.html()).toMatch("false");
    });
});
