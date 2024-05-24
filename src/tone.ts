import {
    TONE_MARK_WITH_CHAR_LOWERCASE_MAP,
    TONE_MARK_WITH_CHAR_UPPERCASE_MAP,
} from './constants/tone.constant';

/**
 * Removes tone marks from a given string.
 *
 * Tone marks in Vietnamese indicate the tone or pitch contour of a syllable.
 * Vietnamese is a tonal language, meaning the pitch at which a word is pronounced can change its meaning.
 * There are six tones in Vietnamese, each represented by a specific tone mark.
 * Here are the tone marks:
 *
 * 1. Dấu sắc (´): acute accent – high rising tone
 * 2. Dấu huyền (`): grave accent – low falling tone
 * 3. Dấu hỏi (̉): hook above – mid dipping-rising tone
 * 4. Dấu ngã (˜): tilde – high rising glottalized tone
 * 5. Dấu nặng (.): dot below – low glottalized tone
 * 6. Không dấu ( ): No mark - mid-level tone (neutral)
 *
 * @example
 * console.log(remove('sắc hỏi ngã nặng'))
 * // săc hoi nga năng
 *
 * @param {string} text - The input string from which the tone marks will be removed.
 * @return {string} The modified string with the tone marks removed.
 *
 * @throws {Error} Throws an error if the input text is not a string.
 */
export function removeTone(text: string): string {
    if (!text || text === undefined || text === null || typeof text !== 'string') {
        throw new Error('text is invalid');
    }

    return [...text.normalize()]
        .map(
            (char) =>
                TONE_MARK_WITH_CHAR_LOWERCASE_MAP[char] ||
                TONE_MARK_WITH_CHAR_UPPERCASE_MAP[char] ||
                char,
        )
        .join('');
}

/**
 * Checks if a given string contains any tone marks.
 *
 * @param {string} text - The input string to check for tone marks.
 * @return {boolean} Returns true if the string contains any tone marks, false otherwise.
 *
 * @throws {Error} Throws an error if the input text is not a string.
 *
 * @see `removeTone` to know what tone marks are.
 */
export function hasTone(text: string): boolean {
    if (!text || text === undefined || text === null || typeof text !== 'string') {
        throw new Error('text is invalid');
    }

    return [...text.normalize()].some(
        (char) =>
            TONE_MARK_WITH_CHAR_LOWERCASE_MAP[char] !== undefined ||
            TONE_MARK_WITH_CHAR_UPPERCASE_MAP[char] !== undefined,
    );
}
