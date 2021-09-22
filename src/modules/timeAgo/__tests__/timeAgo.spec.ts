import { mount } from "@vue/test-utils";
import timeAgo from "../index";

describe("timeAgo", () => {
    const cmp = {
        props: ["val"],
        components: {
            timeAgo
        },
        template: `<div><timeAgo :date=val v-slot="{ time }">
                            <span id="s1">{{ time }}</span>
                        </timeAgo></div>`
    };

    it("should return passed time from given date", async () => {
        const wrapper = mount(cmp, {
            propsData: {
                val: ""
            }
        });
        // we dont check for the time because it is not predictable
        expect(wrapper.find("#s1").text().length > 0).toBe(true);
    });
});
