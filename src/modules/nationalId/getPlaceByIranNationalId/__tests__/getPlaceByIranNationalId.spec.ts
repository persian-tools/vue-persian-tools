import { mount } from "@vue/test-utils";
import getPlaceByIranNationalId from "../index";

describe("getPlaceByIranNationalId", () => {
    const cmp = {
        props: ["val"],
        components: {
            getPlaceByIranNationalId
        },
        template: "<div><getPlaceByIranNationalId :nationalId=val v-slot='{ city, province, codes }'>{{ city }} - {{ province }} - {{ codes }}</getPlaceByIranNationalId></div>"
    };
    it("should return info about given id", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "0906582709"
            }
        });

        expect(wrapper.html()).toMatch("کاشمر");
        expect(wrapper.html()).toMatch("خراسان رضوی");
        expect(wrapper.html()).toMatch(`089`);
        expect(wrapper.html()).toMatch(`090`);
    });

    it("should return nothing if given id is invalid", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: "99999"
            }
        });

        expect(wrapper.html()).toMatch(`<div><span> -  - </span></div>`); // empty style
    });
});
