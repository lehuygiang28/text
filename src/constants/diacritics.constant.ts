const _DIACRITICS_MARK_WITH_CHAR_MAP: Record<string, string> = {
    ắ: 'á',
    ấ: 'á',
    ằ: 'à',
    ầ: 'à',
    ẳ: 'ả',
    ẩ: 'ả',
    ẵ: 'ã',
    ẫ: 'ã',
    ặ: 'ạ',
    ậ: 'ạ',

    ố: 'ó',
    ớ: 'ó',
    ồ: 'ò',
    ờ: 'ò',
    ổ: 'ỏ',
    ở: 'ỏ',
    ỗ: 'õ',
    ỡ: 'õ',
    ộ: 'ọ',
    ợ: 'ọ',

    ế: 'é',
    ề: 'è',
    ể: 'ẻ',
    ễ: 'ẽ',
    ệ: 'ẹ',

    ứ: 'ú',
    ừ: 'ù',
    ử: 'ủ',
    ữ: 'ũ',
    ự: 'ụ',
};

export const DIACRITICS_MARK_WITH_CHAR_LOWERCASE_MAP: Record<string, string> = Object.entries(
    _DIACRITICS_MARK_WITH_CHAR_MAP,
).reduce((acc: Record<string, string>, [key, value]) => {
    acc[key.normalize()] = value.normalize();
    return acc;
}, {});

export const DIACRITICS_MARK_WITH_CHAR_UPPERCASE_MAP: Record<string, string> = Object.entries(
    DIACRITICS_MARK_WITH_CHAR_LOWERCASE_MAP,
).reduce((acc: Record<string, string>, [key, value]) => {
    acc[key.toUpperCase()] = value.toUpperCase();
    return acc;
}, {});
