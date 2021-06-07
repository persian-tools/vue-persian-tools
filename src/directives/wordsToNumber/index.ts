import found from "../helpers/foundation";
import { WordsToNumber } from "@persian-tools/persian-tools";

export default found(WordsToNumber.convert.bind(WordsToNumber) as (str: string) => string, "wordsToNumber", {
    before: (params, binding) => {
        params.push({
            fuzzy: binding.modifiers.fuzzy,
            addCommas: binding.modifiers.addCommas,
            digits: binding.arg || binding.argument || "en"
        });
    }
});
