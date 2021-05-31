import found from "../helpers/foundation";
import { WordsToNumber } from "@persian-tools/persian-tools";

export default found(WordsToNumber.convert.bind(WordsToNumber) as (str: string) => string, "wordsToNumber", false);
