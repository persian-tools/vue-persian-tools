import { Plugin } from "@vue/runtime-core";
import * as components from "./modules/index";

const install: Plugin = Vue => {
    Object.values(components).forEach(cmp => {
        Vue.component(cmp.name, cmp);
    });
};

export default install;

// export components
export { default as isPersian } from "./modules/isPersian";
export { default as URLfix } from "./modules/URLfix";
