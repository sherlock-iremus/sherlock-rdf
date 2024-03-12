export enum Type {
    literal = 'literal',
    uri = 'uri',
}

export enum CountryFlags {
    de = '🇩🇪',
    en = '🇬🇧',
    es = '🇪🇸',
    fr = '🇫🇷',
    it = '🇮🇹',
}

export enum Languages {
    NONE = '',
    DE = 'de',
    EL = 'el',
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    IT = 'it',
    PT = 'pt',
    RU = 'ru',
    ZH = 'zh'
}

export const LANGS_ORDER: Languages[] = [Languages.FR, Languages.EN, Languages.IT, Languages.DE]

export enum XSDTypes {
    anyURI = 'anyURI',
    base64Binary = 'base64Binary',
    boolean = 'boolean',
    date = 'date',
    dateTime = 'dateTime',
    decimal = 'decimal',
    double = 'double',
    duration = 'duration',
    float = 'float',
    hexBinary = 'hexBinary',
    gDay = 'gDay',
    gMonth = 'gMonth',
    gMonthDay = 'gMonthDay',
    gYear = 'gYear',
    gYearMonth = 'gYearMonth',
    NOTATION = 'NOTATION',
    QName = 'QName',
    string = 'string',
    time = 'time'
}