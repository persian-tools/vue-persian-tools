import found from "../helpers/foundation";
import { NumberToWords } from "@persian-tools/persian-tools";

export default found(NumberToWords.convert.bind(NumberToWords), "numberToWords", false);
