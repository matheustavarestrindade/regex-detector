const BaseDateTime = {
    RangeConnectorSymbolRegex: "(--|-|—|——|~|–)",
    BaseAmDescRegex: `(am\\b|a\\s*\\.\\s*m\\s*\\.|a[\\.]?\\s*m\\b)`,
    BasePmDescRegex: `(pm\\b|p\\s*\\.\\s*m\\s*\\.|p[\\.]?\\s*m\\b)`,
    FourDgitYearRegex: `\\b(?<![$])(((1\\d|20)\\d{2})|2100)(?!\\.0\\b)\\b`,
    CheckDecimalRegex: `(?![,.]\\d)`,
    HourRegex: `(?<!\\d[,.])(2[0-4]|[0-1]?\\d)(h)?`,
    DeltaMinuteRegex: `([0-5]?\\d)`,
    MinuteRegex: `([0-5]?\\d)(?!\\d)`,
    SecondRegex: `([0-5]?\\d)`,
};

const DayRegex = `((?:3[0-1]|[1-2]\\d|0?[1-9]))(?=\\b|t)`;
const MonthRegex = `(abr(il)?|ago(sto)?|dez(embro)?|fev(ereiro)?|jan(eiro)?|ju[ln](ho)?|mar([çc]o)?|maio?|nov(embro)?|out(ubro)?|sep?t(embro)?)`;
const WeekDayRegex = `\\b((domingos?|(segunda|ter[çc]a|quarta|quinta|sexta)s?([-\\s+]feiras?)?|s[aá]bados?|(2|3|4|5|6)[aª])\\b|(dom|seg|ter[cç]|qua|qui|sex|sab)\\b(\\.?(?=\\s|,|;|$)))`;
const WrittenOneToNineRegex = `(uma?|dois|duas|tr[eê]s|quatro|cinco|seis|sete|oito|nove)`;
const WrittenOneHundredToNineHundredRegex = `(duzent[oa]s|trezent[oa]s|[cq]uatrocent[ao]s|quinhent[ao]s|seiscent[ao]s|setecent[ao]s|oitocent[ao]s|novecent[ao]s|cem|(?<!por\\s+)(cento))`;
const WrittenOneToNinetyNineRegex = `(((vinte|trinta|[cq]uarenta|cinquenta|sessenta|setenta|oitenta|noventa)(\\s+e\\s+${WrittenOneToNineRegex})?)|d[eé]z|onze|doze|treze|(c|qu)atorze|quinze|dez[ea]sseis|dez[ea]ssete|dez[ea]nove|dezoito|uma?|d(oi|ua)s|tr[eê]s|quatro|cinco|seis|sete|oito|nove)`;
const FullTextYearRegex = `\\b(((dois\\s+)?mil)((\\s+e)?\\s+${WrittenOneHundredToNineHundredRegex})?((\\s+e)?\\s+${WrittenOneToNinetyNineRegex})?)`;
const YearRegex = `(${BaseDateTime.FourDgitYearRegex}|${FullTextYearRegex})`;
const AmDescRegex = `(${BaseDateTime.BaseAmDescRegex})`;
const PmDescRegex = `(${BaseDateTime.BasePmDescRegex})`;
const TwoDgitYearRegex = `\\b(?<![$])(([0-9]\\d))(?!(\\s*((\\:\\d)|${AmDescRegex}|${PmDescRegex}|\\.\\d)))\\b`;
const DateYearRegex = `(${YearRegex}|${TwoDgitYearRegex})`;
const MonthNumRegex = `(1[0-2]|(0)?[1-9])\\b`;

const HourNumRegex = `\\b(zero|uma|duas|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze)\\b`;
const MinuteNumRegex = `(um|dois|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quatorze|quinze|dez[ea]sseis|dez[ea]sete|dezoito|dez[ea]nove|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
const DeltaMinuteNumRegex = `(um|dois|tr[êe]s|[qc]uatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|catorze|quatorze|quinze|dez[ea]sseis|dez[ea]sete|dezoito|dez[ea]nove|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
const TensTimeRegex = `(dez|vinte|trinta|[qc]uarenta|cin[qc]uenta)`;
const LessThanOneHour = `(((\\s+e\\s+)?(quinze|(um\\s+|dois\\s+|tr[êes]\\s+)?quartos?)|quinze|(\\s*)(um\\s+|dois\\s+|tr[êes]\\s+)?quartos?|(\\s+e\\s+)(meia|trinta)|${BaseDateTime.DeltaMinuteRegex}(\\s+(minuto|minutos|min|mins))|${DeltaMinuteNumRegex}(\\s+(minuto|minutos|min|mins))))`;
const OclockRegex = `(em\\s+ponto)`;
const AmRegex = `((pela|de|da|na)\\s+(manh[ãa]|madrugada))`;
const PmRegex = `(((pela|de|da|\\b[àa]\\b|na)\\s+(tarde|noite)))|((depois\\s+do|ap[óo]s\\s+o)\\s+(almo[çc]o|meio dia|meio-dia))`;
const TimeSuffix = `((${LessThanOneHour}\\s+)?(${AmRegex}|${PmRegex}|${OclockRegex}))`;
const TimePrefix = `(${LessThanOneHour}(\\s+(passad[ao]s)\\s+(as)?|\\s+depois\\s+(das?|do)|\\s+pras?|\\s+(para|antes)?\\s+([àa]s?))?)`;
const DescRegex = `((${AmDescRegex}|${PmDescRegex}))`;
const WrittenTimeRegex = `((${HourNumRegex}\\s*((e|menos)\\s+)?(${MinuteNumRegex}|(${TensTimeRegex}((\\s*e\\s+)?${MinuteNumRegex}))))|((${MinuteNumRegex}|(${TensTimeRegex}((\\s*e\\s+)?${MinuteNumRegex})?))\\s*((para as|pras|antes da|antes das)\\s+)?(${HourNumRegex}|${BaseDateTime.HourRegex})))`;
const BasicTime = `(${WrittenTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex}:${BaseDateTime.MinuteRegex}(:${BaseDateTime.SecondRegex})?|${BaseDateTime.HourRegex})`;

// DAYS EXTRACTOR
const DATE_EXTRACTOR_1 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}((\\s*(de)|[/\\\\.\\- ])\\s*)?${MonthRegex}\\b`;
const DATE_EXTRACTOR_2 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${DayRegex}\\s*([/\\.\\-]|de)?\\s*${MonthRegex}(\\s*([,./-]|de)\\s*)${DateYearRegex}|${BaseDateTime.FourDgitYearRegex}\\s*[/\\.\\- ]\\s*${DayRegex}\\s*[/\\.\\- ]\\s*${MonthRegex}\\b`;
const DATE_EXTRACTOR_3 = `\\b(${WeekDayRegex}(\\s+|\\s*,\\s*))?${MonthRegex}(\\s*[/\\.\\- ]\\s*|\\s+de\\s+)${DayRegex}((\\s*[/\\.\\- ]\\s*|\\s+de\\s+)${DateYearRegex})?\\b`;
const DATE_EXTRACTOR_4 = `\\b${MonthNumRegex}\\s*[/\\\-]\\s*${DayRegex}\\s*[/\\\-]\\s*${DateYearRegex}(?!\\s*[/\\\-\\.]\\s*\d+)`;
const DATE_EXTRACTOR_5 = `\\b${DayRegex}\\s*[/\\\-\\.]\\s*(${MonthNumRegex}|${MonthRegex})\\s*[/\\\-\\.]\\s*${DateYearRegex}(?!\\s*[/\\\-\\.]\\s*\\d+)`;
const DATE_EXTRACTOR_6 = `(?<=\\b(em|no|o)\\s+)${MonthNumRegex}[\\-\\.]${DayRegex}${BaseDateTime.CheckDecimalRegex}\\b`;
const DATE_EXTRACTOR_7 = `\\b${MonthNumRegex}\\s*/\\s*${DayRegex}((\\s+|\\s*(,|de)\\s*)${DateYearRegex})?${BaseDateTime.CheckDecimalRegex}\\b`;
const DATE_EXTRACTOR_8 = `(?<=\\b(em|no|o)\\s+)${DayRegex}[\\\-]${MonthNumRegex}${BaseDateTime.CheckDecimalRegex}\\b`;
const DATE_EXTRACTOR_9 = `\\b${DayRegex}\\s*/\\s*${MonthNumRegex}((\\s+|\\s*(,|de)\\s*)${DateYearRegex})?${BaseDateTime.CheckDecimalRegex}\\b`;
const DATE_EXTRACTOR_10 = `\\b(${YearRegex}\\s*[/\\\-\\.]\\s*(${MonthNumRegex}|${MonthRegex})\\s*[/\\\-\\.]\\s*${DayRegex}|${MonthRegex}\\s*[/\\\-\\.]\\s*${BaseDateTime.FourDgitYearRegex}\\s*[/\\\-\\.]\\s*{DayRegex}|{DayRegex}\\s*[/\\\-\\.]\\s*${BaseDateTime.FourDgitYearRegex}\\s*[/\\\-\\.]\\s*${MonthRegex})(?!\\s*[/\\\-\\.:]\\s*\\d+)`;
const DATE_EXTRACTOR_11 = `(?<=\\b(dia)\\s+)${DayRegex}`;

// TIME EXTRACTOR

const TIME_EXTRACTOR_1 = `(\\b${TimePrefix}\\s+)?(${WrittenTimeRegex}|${HourNumRegex}|${BaseDateTime.HourRegex})\\s*(${DescRegex})`;
const TIME_EXTRACTOR_2 = `(\\b${TimePrefix}\\s+)?(t)?${BaseDateTime.HourRegex}(\\s*)?:(\\s*)?${BaseDateTime.MinuteRegex}((\\s*)?:(\\s*)?${BaseDateTime.SecondRegex})?((\\s*${DescRegex})|\\b)`;
const TIME_EXTRACTOR_3 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}\\.${BaseDateTime.MinuteRegex}(\\s*${DescRegex})`;
const TIME_EXTRACTOR_4 = `\\b((${DescRegex}?)|(${BasicTime}?)(${DescRegex}?))(${TimePrefix}\\s*)(${HourNumRegex}|${BaseDateTime.HourRegex})?(\\s+${TensTimeRegex}(\\s+e\\s+)?${MinuteNumRegex}?)?(${OclockRegex})?\\b`;
const TIME_EXTRACTOR_5 = `\\b(${TimePrefix}|${BasicTime}${TimePrefix})\\s+(\\s*${DescRegex})?${BasicTime}?\\s*${TimeSuffix}\\b`;
const TIME_EXTRACTOR_6 = `(${BasicTime}(\\s*${DescRegex})?\\s+${TimeSuffix}\\b)`;
const TIME_EXTRACTOR_7 = `\\b${TimeSuffix}\\s+[àa]s?$\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
const TIME_EXTRACTOR_8 = `\\b${TimeSuffix}\\s+${BasicTime}((\\s*${DescRegex})|\\b)`;
const TIME_EXTRACTOR_9 = `\\b(${HourNumRegex}\\s+(${TensTimeRegex}\\s*)(e\\s+)?${MinuteNumRegex}?)\\b`;
const TIME_EXTRACTOR_11 = `\\b(${WrittenTimeRegex})(\\s+${DescRegex})?\\b`;
const TIME_EXTRACTOR_12 = `(\\b${TimePrefix}\\s+)?${BaseDateTime.HourRegex}(\\s*h\\s*)${BaseDateTime.MinuteRegex}(\\s*${DescRegex})?`;

// FEARIADO EXTRACTOR

const HOLIDAY_EXTRACTOR_1 = `\\b(sexta-feira santa|sexta-feira da paix[ãa]o|quarta-feira de cinzas|carnaval|dia dos? presidentes?|ano novo chin[eê]s|ano novo|v[ée]spera de ano novo|natal|v[ée]spera de natal|dia de a[cç][ãa]o de gra[çc]as|a[cç][ãa]o de gra[çc]as|yuandan|halloween|dia das bruxas|p[áa]scoa)(\\s+(d[eo]?\\s+)?(${YearRegex}|((pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;
const HOLIDAY_EXTRACTOR_2 = `\\b((dia\\s+(d[eoa]s?\\s+)?)?(martin luther king|todos os santos|s[ãa]o (patr[íi]cio|francisco|jorge|jo[ãa]o)|independ[êe]ncia))(\\s+(d[eo]?\\s+)?({YearRegex}|((pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;
const HOLIDAY_EXTRACTOR_3 = `\b((dia\s+d[eoa]s?\s+)(trabalh(o|ador(es)?)|m[ãa]es?|pais?|mulher(es)?|crian[çc]as?|marmota|professor(es)?))(\\s+(d[eo]?\\s+)?(${YearRegex}|((pr[oó]xim[oa]?|[nd]?es[st][ea]|[uú]ltim[oa]?|em))\\s+ano))?\\b`;

export const replaceGenericDate = (str) => {
    str = str.replace(new RegExp(DATE_EXTRACTOR_1, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_2, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_3, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_4, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_5, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_6, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_7, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_8, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_9, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_10, "g"), "DATE");
    str = str.replace(new RegExp(DATE_EXTRACTOR_11, "g"), "DATE");
    return str;
};

export const replaceGenericTime = (str) => {
    str = str.replace(new RegExp(TIME_EXTRACTOR_1, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_2, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_3, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_4, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_5, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_6, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_7, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_8, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_9, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_11, "g"), "TIME");
    str = str.replace(new RegExp(TIME_EXTRACTOR_12, "g"), "TIME");
    return str;
};

export const replaceGenericHoliday = (str) => {
    str = str.replace(new RegExp(HOLIDAY_EXTRACTOR_1, "g"), "HOLIDAY");
    str = str.replace(new RegExp(HOLIDAY_EXTRACTOR_2, "g"), "HOLIDAY");
    str = str.replace(new RegExp(HOLIDAY_EXTRACTOR_3, "g"), "HOLIDAY");
    return str;
};
