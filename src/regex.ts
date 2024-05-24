import { CreateRegexOptions } from './types/regex.type';
import {
    LOWER_CASE_MAP,
    UPPER_CASE_MAP,
    SAME_CASE_MAP,
    BOTH_LOWER_UPPER_CASE_MAP,
} from './constants/regex.constant';

/**
 * @description
 * Create a regular expression that matches a keyword with or without diacritical marks
 * and with different variations of the same letter.
 *
 * With the default options, the regex will automatically match the case is lower or upper of the keyword
 * and return the same case. If you want to change the output case, you can use the outputCase property.
 *
 * @example
 * const regex = createRegex('Hà Nội oi');
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/i
 *
 * // With sensitive option
 * // Remove the last flag `i` in the regex
 * const regex = createRegex('Hà Nội oi', { sensitive: true });
 * console.log(regex) // /[H][à][ ][N][ộ][iíìỉĩị][ ][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]/
 *
 * // With outputCase option
 * // Change the output case of the regex
 * const regex = createRegex('Hà Nội oi', { outputCase: 'lower' });
 *
 * @param keyword The keyword to search for.
 *
 * @property sensitive Whether the search is case sensitive or not.
 * @property ignoreAccentedVietnamese Whether the search should ignore punctuation or not. It mean if true all punctuation will be replaced by original character.
 * @property {OutputCase} outputCase Whether the regex should match lowercase, uppercase, sameInput or both.
 * @default
 * sensitive false
 * outputCase 'same'
 *
 * @returns A regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter.
 */

export function createRegex(keyword: string, options?: CreateRegexOptions): RegExp {
    // Check that the keyword parameter is defined.
    if (!keyword || keyword === undefined || keyword === null || typeof keyword !== 'string') {
        throw new Error('keyword is invalid');
    }

    const { outputCase = 'same', sensitive = false } = options || {};

    // Generate the regex string.
    const regexString = Array.from(keyword, (char: string) => {
        let variationsSet = SAME_CASE_MAP.get(char) || char;

        switch (outputCase) {
            case 'lowerAndUpper':
                variationsSet = BOTH_LOWER_UPPER_CASE_MAP.get(char) || char;
                break;
            case 'lower':
                variationsSet = LOWER_CASE_MAP.get(char) || char.toLowerCase();
                break;
            case 'upper':
                variationsSet = UPPER_CASE_MAP.get(char) || char.toUpperCase();
                break;
            case 'same':
            default:
                variationsSet = SAME_CASE_MAP.get(char) || char;
                break;
        }

        return `[${variationsSet}]`;
    }).join('');

    return new RegExp(regexString, sensitive ? '' : 'i');
}

export * from './types/regex.type';
