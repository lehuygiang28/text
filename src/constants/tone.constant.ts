const _TONE_MARK_WITH_CHAR_MAP: Record<string, string> = {
    á: 'a',
    ắ: 'ă',
    ấ: 'â',
    à: 'a',
    ằ: 'ă',
    ầ: 'â',
    ả: 'a',
    ẳ: 'ă',
    ẩ: 'â',
    ã: 'a',
    ẵ: 'ă',
    ẫ: 'â',
    ạ: 'a',
    ặ: 'ă',
    ậ: 'â',

    ó: 'o',
    ố: 'ô',
    ớ: 'ơ',
    ò: 'o',
    ồ: 'ô',
    ờ: 'ơ',
    ỏ: 'o',
    ổ: 'ô',
    ở: 'ơ',
    õ: 'o',
    ỗ: 'ô',
    ỡ: 'ơ',
    ọ: 'o',
    ộ: 'ô',
    ợ: 'ơ',

    é: 'e',
    ế: 'ê',
    è: 'e',
    ề: 'ê',
    ẻ: 'e',
    ể: 'ê',
    ẽ: 'e',
    ễ: 'ê',
    ẹ: 'e',
    ệ: 'ê',

    ú: 'u',
    ứ: 'ư',
    ù: 'u',
    ừ: 'ư',
    ủ: 'u',
    ử: 'ư',
    ũ: 'u',
    ữ: 'ư',
    ụ: 'u',
    ự: 'ư',

    í: 'i',
    ì: 'i',
    ỉ: 'i',
    ĩ: 'i',
    ị: 'i',

    ý: 'y',
    ỳ: 'y',
    ỷ: 'y',
    ỹ: 'y',
    ỵ: 'y',
};

export const TONE_MARK_WITH_CHAR_LOWERCASE_MAP: Record<string, string> = Object.entries(
    _TONE_MARK_WITH_CHAR_MAP,
).reduce((acc: Record<string, string>, [key, value]) => {
    acc[key.normalize()] = value.normalize();
    return acc;
}, {});

export const TONE_MARK_WITH_CHAR_UPPERCASE_MAP: Record<string, string> = Object.entries(
    TONE_MARK_WITH_CHAR_LOWERCASE_MAP,
).reduce((acc: Record<string, string>, [key, value]) => {
    acc[key.toUpperCase()] = value.toUpperCase();
    return acc;
}, {});
