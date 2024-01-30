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