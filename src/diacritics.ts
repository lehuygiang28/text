import {
    DIACRITICS_MARK_WITH_CHAR_LOWERCASE_MAP,
    DIACRITICS_MARK_WITH_CHAR_UPPERCASE_MAP,
} from './constants/diacritics.constant';

/**
 * Diacritical marks in Vietnamese modify the pronunciation of vowels but do not indicate tone.
 * Instead, they indicate different vowel qualities.
 * These marks change the base vowel sound to another vowel sound.
 * Here are the diacritical marks
 *
 * 1. Dấu mũ (ˆ): circumflex – used with vowels to create â, ê, ô
 * 2. Dấu trăng (˘): breve – used with a to create ă
 * 3. Dấu móc (̛): horn – used with o and u to create ơ, ư
 *
 * @example
 * console.log(removeDiacritics('sắc huyền ngã hỏi nặng'))
 * //sác huyèn ngã hỏi nạng
 *
 * @param text The text to remove accent
 * @returns The text without accent
 *
 * @throws {Error} Throws an error if the input text is not a string.
 */
export function removeDiacritics(text: string): string {
    if (!text || text === undefined || text === null || typeof text !== 'string') {
        throw new Error('text is invalid');
    }

    return Array.from(text.normalize())
        .map(
            (char) =>
                DIACRITICS_MARK_WITH_CHAR_LOWERCASE_MAP[char] ||
                DIACRITICS_MARK_WITH_CHAR_UPPERCASE_MAP[char] ||
                char,
        )
        .join('');
}

/**
 * Checks if a given string contains any diacritical marks.
 *
 * @param {string} text - The input string to check for diacritical marks.
 * @return {boolean} Returns true if the string contains any diacritical marks, false otherwise.
 *
 * @throws {Error} Throws an error if the input text is not a string.
 *
 * @see `removeDiacritics` to know what diacritical marks are.
 */
export function hasDiacritics(text: string): boolean {
    if (!text || text === undefined || text === null || typeof text !== 'string') {
        throw new Error('text is invalid');
    }

    return [...text.normalize()].some(
        (char) =>
            DIACRITICS_MARK_WITH_CHAR_LOWERCASE_MAP[char] !== undefined ||
            DIACRITICS_MARK_WITH_CHAR_UPPERCASE_MAP[char] !== undefined,
    );
}
