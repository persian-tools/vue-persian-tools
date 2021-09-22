import { mount } from "@vue/test-utils";
import plate from "../index";

describe("plate", () => {
    const cmp = {
        props: ["val"],
        components: {
            plate
        },
        template: `<div><plate :number=val v-slot="{ info, isValid }">
                            <span id="s1">{{ info }}</span>
                            <span id="s2">{{ isValid }}</span>
                        </plate></div>`
    };

    it("should return plate info for car", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "12D45147"
            }
        });
        const dummyReturn = {
            template: `12D451ایران47`,
            province: `مرکزی`,
            type: `Car`,
            category: `دیپلمات`,
            details: {
                firstTwoDigits: "12",
                plateCharacter: `D`,
                nextThreeDigits: "451",
                provinceCode: "47"
            }
        };
        const _res_ = JSON.parse(wrapper.find("#s1").text());
        expect(_res_).toEqual(dummyReturn);
    });

    it("should return plate info for motorcyles ", () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "12345678"
            }
        });
        const dummyReturn = {
            template: "123-45678",
            province: "مرکز تهران",
            type: "Motorcycle",
            category: null,
            details: {
                digits: "45678",
                provinceCode: "123"
            }
        };
        const _res_ = JSON.parse(wrapper.find("#s1").text());
        expect(_res_).toEqual(dummyReturn);
    });

    it("validate plates", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "12D45147"
            }
        });
        expect(JSON.parse(wrapper.find("#s2").text())).toBeTruthy();
        await wrapper.setProps({ val: "1234567" });
        expect(JSON.parse(wrapper.find("#s2").text())).toBeFalsy();
    });
});
