import found from "../helpers/foundation";
import { wordsToNumber } from "@persian-tools/persian-tools";

export default found(wordsToNumber.bind(wordsToNumber) as (str: string) => string, "wordsToNumber", {
    before: (params, binding) => {
        params.push({
            fuzzy: binding.modifiers.fuzzy,
            addCommas: binding.modifiers.addCommas,
            digits: binding.arg || binding.argument || "en"
        });
    }
});
