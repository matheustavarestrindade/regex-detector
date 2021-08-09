export default class RegexValidator {
    constructor() {
        this.results = {};
    }

    async load() {}

    getPatterns() {}
}

export const fixText = (text) => {
    //Remove all pontiations
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    //Remove all spaces that are more than 1
    text = text.replace(/\s{2,}/g, " ");
    //Convert all characters with accents to normal ascii chars
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    //replace percentages to have detection
    text = text.replace(/\\d+(?:\\.\\d+)?%/, "PERCENTAGE");
    return text;
};
