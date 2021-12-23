import { replaceGenericDate, replaceGenericHoliday, replaceGenericTime } from "./regex/parsers/DateParser.js";
import color from "colors";
color.enable();
const dateParserTest = () => {
    let testeString = "Essa e uma string de teste escrita ás 14:03 no dia 13 com a data 13/08/2021 na sexta-feira santa";

    testeString = replaceGenericTime(testeString);
    testeString = replaceGenericHoliday(testeString);
    testeString = replaceGenericDate(testeString);

    const r = new RegExp(`\\busd[\\\\/]?brl\\b`, "g");
    console.log("usdbrl", r.exec("usdbrl"));
    const r1 = new RegExp(`\\busd[\\\\/]?brl\\b`, "g");
    console.log(`usd/brl`, r1.exec(`usd/brl`));
    const r2 = new RegExp(`\\busd[\\/]?brl\\b`, "g");
    console.log(`usd\\brl`, r2.exec("usd\brl"));

    console.log("DateParser test result:".white, testeString == "Essa e uma string de teste escrita ás TIME no dia DATE com a data DATE na HOLIDAY" ? "PASSED".green : "REPROVED".red);
};

dateParserTest();
