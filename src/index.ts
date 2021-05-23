import { Plugin } from "vue-demi";

import * as components from "./modules/index";

const plugin: Plugin = {
    install(Vue) {
        Object.values(components).forEach(cmp => {
            Vue.component(cmp.name, cmp);
        });
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
