import { createApp } from "vue";
import App from "./dummy.skip.vue";
import plugin from "../index";

describe("plugin", () => {
    it("should install components globally", () => {
        const app = createApp(App).use(plugin);
        const components = app._context.components;

        expect(components).toHaveProperty("isPersian");
        expect(components).toHaveProperty("URLfix");
        expect(components).toHaveProperty("addOrdinalSuffix");

        expect(app._context.directives).toEqual({});
    });
    it("should install directives globally", () => {
        const app = createApp(App).use(plugin, {
            components: false,
            directives: true
        });
        const directives = app._context.directives;

        expect(directives).toHaveProperty("URLfix");
        expect(directives).toHaveProperty("halfSpace");

        expect(app._context.components).toEqual({});
    });
    it("should install some directives and components globally", () => {
        const app = createApp(App).use(plugin, {
            components: ["isPersian", "test"],
            directives: ["halfSpace"]
        });
        const components = app._context.components;
        const directives = app._context.directives;

        expect(components).toHaveProperty("isPersian");
        expect(components).not.toHaveProperty("halfSpace");
        expect(directives).toHaveProperty("halfSpace");
        expect(directives).not.toHaveProperty("URLfix");
    });
});
