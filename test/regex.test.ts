import { createRegex, CreateRegexOptions } from '../src';

describe('createRegex', () => {
    [123, '', null, undefined, NaN].forEach((keyword) =>
        it(`should throw an error if the keyword parameter is not a string: '${String(keyword)}'`, () => {
            expect(() => createRegex(keyword as any)).toThrow('keyword is invalid');
        }),
    );

    it('should generate a regular expression that matches the keyword with or without diacritical marks and with different variations of the same letter', () => {
        const keyword = 'Hà Nội';
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][iíìỉĩị]`, 'i');
        expect(createRegex(keyword)).toEqual(expectedRegex);
    });

    it('should generate a regex with keep tone and diacritics with flag i', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            sensitive: false,
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][iíìỉĩị]`, 'i');
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    it('should generate a regex with keep tone and diacritics without sensitive flag', () => {
        const keyword = 'Hà Nội';
        const options: CreateRegexOptions = {
            sensitive: true,
        };
        const expectedRegex = new RegExp(`[H][à][ ][N][ộ][iíìỉĩị]`);
        expect(createRegex(keyword, options)).toEqual(expectedRegex);
    });

    [
        { input: 'Hà Nội', expected: '[H][à][ ][N][ộ][iíìỉĩị]' },
        { input: 'hà nội', expected: '[h][à][ ][n][ộ][iíìỉĩị]' },
        { input: 'HÀ NỘI', expected: '[H][À][ ][N][Ộ][IÍÌỈĨỊ]' },
        { input: 'ha noi', expected: '[h][aáàảãạăắằẳẵặâấầẩẫậ][ ][n][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]' },
        { input: 'HA NOI', expected: '[H][AÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][N][OÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][IÍÌỈĨỊ]' },
    ].forEach(({ input, expected }) => {
        it(`should generate a regex with output case is same: ${input} - ${expected}`, () => {
            const options: CreateRegexOptions = {
                sensitive: true,
            };
            expect(createRegex(input, options)).toEqual(new RegExp(expected));
        });
    });

    [
        { input: 'Hà Nội', expected: '[h][à][ ][n][ộ][iíìỉĩị]' },
        // { input: 'hà nội', expected: '[h][à][ ][n][ộ][iíìỉĩị]' },
        // { input: 'HÀ NỘI', expected: '[h][à][ ][n][ộ][iíìỉĩị]' },
        // { input: 'HA NOI', expected: '[h][aáàảãạăắằẳẵặâấầẩẫậ][ ][n][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]' },
    ].forEach(({ input, expected }) => {
        it(`should generate a regex with output case is lower: ${input} - ${expected}`, () => {
            const options: CreateRegexOptions = {
                sensitive: true,
                outputCase: 'lower',
            };
            expect(createRegex(input, options)).toEqual(new RegExp(expected));
        });
    });

    [
        { input: 'Hà Nội', expected: '[H][À][ ][N][Ộ][IÍÌỈĨỊ]' },
        { input: 'hà nội', expected: '[H][À][ ][N][Ộ][IÍÌỈĨỊ]' },
        { input: 'HÀ NỘI', expected: '[H][À][ ][N][Ộ][IÍÌỈĨỊ]' },
        { input: 'HA NOI', expected: '[H][AÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][N][OÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][IÍÌỈĨỊ]' },
    ].forEach(({ input, expected }) => {
        it(`should generate a regex with output case is UPPER: ${input} - ${expected}`, () => {
            const options: CreateRegexOptions = {
                sensitive: true,
                outputCase: 'upper',
            };
            expect(createRegex(input, options)).toEqual(new RegExp(expected));
        });
    });

    [
        { input: 'Hà Nội', expected: '[hH][àÀ][ ][nN][ộỘ][iíìỉĩịIÍÌỈĨỊ]' },
        { input: 'hà nội', expected: '[hH][àÀ][ ][nN][ộỘ][iíìỉĩịIÍÌỈĨỊ]' },
        { input: 'HÀ NỘI', expected: '[hH][àÀ][ ][nN][ộỘ][iíìỉĩịIÍÌỈĨỊ]' },
        {
            input: 'HA NOI',
            expected:
                '[hH][aáàảãạăắằẳẵặâấầẩẫậAÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬ][ ][nN][oóòỏõọôốồổỗộơớờởỡợOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ][iíìỉĩịIÍÌỈĨỊ]',
        },
    ].forEach(({ input, expected }) => {
        it(`should generate a regex with output case is both lower and UPPER: ${input} - ${expected}`, () => {
            const options: CreateRegexOptions = {
                sensitive: true,
                outputCase: 'lowerAndUpper',
            };
            expect(createRegex(input, options)).toEqual(new RegExp(expected));
        });
    });
});
