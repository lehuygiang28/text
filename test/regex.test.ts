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

    // it('should generate a regular expression that have sensitive case', () => {
    //     const keyword = 'Hà Nội';
    //     const options: CreateRegexOptions = {
    //         sensitive: false,
    //     };
    //     const expectedRegex = new RegExp(`[H][aáàảãạăắằẳẵặâấầẩẫậ][ ][N][oóòỏõọôốồổỗộơớờởỡợ][iíìỉĩị]`, 'i');
    //     expect(createRegex(keyword, options)).toEqual(expectedRegex);
    // });

    // it('should generate a regular expression that not ignore accented', () => {
    //     const keyword = 'Hà Nội';
    //     const options: CreateRegexOptions = {
    //         sensitive: false,
    //     };
    //     const expectedRegex = new RegExp(`[H][à][ ][N][ộ][iíìỉĩị]`, 'i');
    //     expect(createRegex(keyword, options)).toEqual(expectedRegex);
    // });

    // it('should throw an error if the keyword parameter is undefined', () => {
    //     const keyword = undefined;
    //     expect(() => createRegex(keyword as any)).toThrow('Keyword parameter is required');
    // });

    // it('should generate a regex with all is lowercase', () => {
    //     const keyword = 'Hà Nội';
    //     const options: CreateRegexOptions = {
    //         outputCase: 'lower',
    //     };
    //     const expectedRegex = new RegExp(`[h][à][ ][n][ộ][iíìỉĩị]`, 'i');
    //     expect(createRegex(keyword, options)).toEqual(expectedRegex);
    // });

    // it('should generate a regex with same case', () => {
    //     const keyword = 'hà NộI';
    //     const options: CreateRegexOptions = {
    //         outputCase: 'same',
    //     };
    //     const expectedRegex = new RegExp(`[h][à][ ][N][ộ][${UPPER_CASE_MAP.get('i')}]`, 'i');
    //     expect(createRegex(keyword, options)).toEqual(expectedRegex);
    // });
});
