import { Plugin } from "vue-demi";

import * as components from "./modules/index";
import * as directives from "./directives/index";

import { IPersianToolsVuePluginOptions } from "./types";

const plugin: Plugin = {
    install(Vue, options: IPersianToolsVuePluginOptions) {
        const _defaultOptions: IPersianToolsVuePluginOptions = {
            components: true,
            directives: false
        };

        const opts = { ..._defaultOptions, ...options };

        if (opts.components) {
            // install components
            Object.values(components).forEach(cmp => {
                Vue.component(cmp.name, cmp);
            });
        }

        if (opts.directives) {
            // install directives
            Object.values(directives).forEach(directive => {
                Vue.directive(directive.name as string, directive);
            });
        }
    }
};

export default plugin;

// export components
export { default as isPersian } from "./modules/isPersian";
export { default as URLfix } from "./modules/URLfix";
export { default as addOrdinalSuffix } from "./modules/addOrdinalSuffix";
export { default as halfSpace } from "./modules/halfSpace";
export { default as hasPersian } from "./modules/hasPersian";
export { default as sheba } from "./modules/sheba";
export { default as toPersianChars } from "./modules/toPersianChars";
export { default as removeOrdinalSuffix } from "./modules/removeOrdinalSuffix";
export { default as verifyIranianNationalId } from "./modules/nationalId/verifyIranianNationalId";
export { default as getPlaceByIranNationalId } from "./modules/nationalId/getPlaceByIranNationalId";
export { default as verifyCardNumber } from "./modules/bank/verifyCardNumber";
export { default as getBankNameFromCardNumber } from "./modules/bank/getBankNameFromCardNumber";
export { default as numberToWords } from "./modules/numberToWords";
export { default as wordsToNumber } from "./modules/wordsToNumber";
export { default as isArabic } from "./modules/isArabic";
export { default as extractCardNumber } from "./modules/extractCardNumber";

// export directives
export { default as URLfixDirective } from "./directives/urlFix";
export { default as halfSpaceDirective } from "./directives/halfSpace";
