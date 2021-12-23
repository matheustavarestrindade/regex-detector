import { replaceGenericDate, replaceGenericHoliday, replaceGenericTime } from "./parsers/DateParser.js";

export default class RegexValidator {
    constructor() {
        this.results = {};
    }

    async load() {}

    getPatterns() {}
}

export const fixText = (text) => {
    //Remove all pontiations
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\”\“\—]/g, "");
    //Remove all spaces that are more than 1
    text = text.replace(/\s{2,}/g, " ");
    //Convert all characters with accents to normal ascii chars
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //replace percentages to have detection
    text = text.replace(/\\d+(?:\\.\\d+)?%/, "PERCENTAGE");
    return text;
};

export const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
};

export const replaceTextWithGeneric = (str) => {
    str = str.replace(PERCENTAGE_REGEX, "PERCENTAGE");
    str = str.replace(MONETARY_VALUE_REGEX, "MONETARY_VALUE");
    str = str.replace(MULTIPLIER_REGEX, "MULTIPLIER");
    str = replaceGenericDate(str);
    str = replaceGenericTime(str);
    str = replaceGenericHoliday(str);
    return str;
};

const MULTIPLIER_REGEX = /\d+((,\d{1,3})+)?(\.\d+)?((,\d{1,3})+)?(\.\d+)?((,\d{1,3})+)?(\.\d+)? ?(vezes|x )/g;
const PERCENTAGE_REGEX = /((-|)\d{1,2}(.\d*)?)%/g;
const MONETARY_VALUE_REGEX = /(R\$|\$) ?\d+((,\d{1,3})+)?(\.\d+)?((,\d{1,3})+)?(\.\d+)?((,\d{1,3})+)?(\.\d+)?/g;

// CUSTOM MICROSOFT REGEXS
