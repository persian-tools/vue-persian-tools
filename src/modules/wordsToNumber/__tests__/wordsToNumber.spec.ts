import { mount } from "@vue/test-utils";
import wordsToNumber from "../index";

describe("wordsToNumber", () => {
    describe("wordsToNumbers with digit props", () => {
        const cmp = {
            props: ["num", "digits"],
            components: {
                wordsToNumber
            },
            template: "<div><wordsToNumber :words=num :digits=digits v-slot='{number}'>{{ number }}</wordsToNumber></div>"
        };
        it("should convert to number with default options", () => {
            const wrapper = mount(cmp, {
                propsData: {
                    num: "منفی سه هزار"
                }
            });
            expect(wrapper.html()).toMatch("-3000");
        });

        it("should convert to number with given digits option", () => {
            const wrapper = mount(cmp, {
                propsData: {
                    num: "منفی سه هزار",
                    digits: "fa"
                }
            });

            expect(wrapper.html()).toMatch("-۳۰۰۰");
        });
    });
    describe("wordsToNumbers with addCommas", () => {
        const cmp = {
            props: ["num", "addCommas"],
            components: {
                wordsToNumber
            },
            template: "<div><wordsToNumber :words=num addCommas v-slot='{number}'>{{ number }}</wordsToNumber></div>"
        };

        it("should add commas to number", () => {
            const wrapper = mount(cmp, {
                propsData: {
                    num: "چهارصد پنجاه هزار"
                }
            });
            expect(wrapper.html()).toMatch("450,000");
        });
    });

    describe("wordsToNumbers fuzzy", () => {
        const cmp = {
            props: ["num", "fuzzy"],
            components: {
                wordsToNumber
            },
            template: "<div><wordsToNumber :words=num fuzzy v-slot='{number}'>{{ number }}</wordsToNumber></div>"
        };

        it("should work with fuzzy model", () => {
            const wrapper = mount(cmp, {
                propsData: {
                    num: "ضد و بنچاه و دو"
                }
            });
            expect(wrapper.html()).toMatch("152");
        });
    });
});
