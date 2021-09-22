import { Plugin } from "vue-demi";

import * as components from "./modules/index";
import * as directives from "./directives/index";

export interface IPersianToolsVuePluginOptions {
    components: boolean;
    directives: boolean;
}

const plugin: Plugin = {
    install(Vue, options: IPersianToolsVuePluginOptions) {
        const _defaultOptions: IPersianToolsVuePluginOptions = {
            components: true,
            directives: false
        };

        const opts = { ..._defaultOptions, ...options };

        if (opts.components === true) {
            // install components
            Object.values(components).forEach(cmp => {
                Vue.component(cmp.name, cmp);
            });
        } else if (Array.isArray(opts.components)) {
            opts.components.forEach(cmp => {
                cmp = (components as any)[cmp];
                if (cmp) Vue.component(cmp.name, cmp);
            });
        }

        if (opts.directives === true) {
            // install directives
            Object.values(directives).forEach(directive => {
                Vue.directive(directive.name, directive);
            });
        } else if (Array.isArray(opts.directives)) {
            opts.directives.forEach(directive => {
                directive = (directives as any)[directive];
                if (directive) Vue.directive(directive.name, directive);
            });
        }
    }
};

export default plugin;
