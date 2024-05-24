import { removeTone, hasTone } from '../src/tone';

describe('removeTone', () => {
    [null, undefined, 123, NaN].forEach((input) =>
        it('should throw an error if the input is not a string', () => {
            expect(() => removeTone(input as any)).toThrow('text is invalid');
        }),
    );

    [
        {
            input: 'các dấu sắc huyền ngã hỏi nặng sẽ mất đi',
            expected: 'cac dâu săc huyên nga hoi năng se mât đi',
        },
        {
            input: 'CÁC DẤU SẮC HUYỀN NGÃ HỎI NẶNG SẼ MẤT ĐI',
            expected: 'CAC DÂU SĂC HUYÊN NGA HOI NĂNG SE MÂT ĐI',
        },
        {
            input: 'khong CO dau Gi Ca nen Se k bi sao',
            expected: 'khong CO dau Gi Ca nen Se k bi sao',
        },
        {
            input: 'ố ớ ò ồ ờ ỏ ổ ở õ ỗ ỡ ọ ộ ợ, é ế è ề ẻ ể ẽ ễ ẹ ệ, ú ứ ù ừ ủ ử ũ ữ ụ ự, í ì ỉ ĩ ị, ý ỳ ỷ ỹ ỵ',
            expected:
                'ô ơ o ô ơ o ô ơ o ô ơ o ô ơ, e ê e ê e ê e ê e ê, u ư u ư u ư u ư u ư, i i i i i, y y y y y',
        },
        {
            input: 'Ố Ớ Ò Ồ Ờ Ỏ Ổ Ở Õ Ỗ Ỡ Ọ Ộ Ợ, É Ế È Ề Ẻ Ể Ẽ Ễ Ẹ Ệ, Ú Ứ Ù Ừ Ủ Ử Ũ Ữ Ụ Ự, Í Ì Ỉ Ĩ Ị, Ý Ỳ Ỷ Ỹ Ỵ',
            expected:
                'Ô Ơ O Ô Ơ O Ô Ơ O Ô Ơ O Ô Ơ, E Ê E Ê E Ê E Ê E Ê, U Ư U Ư U Ư U Ư U Ư, I I I I I, Y Y Y Y Y',
        },
    ].forEach(({ input, expected }) => {
        test(`Input "${input}" should return "${expected}"`, () => {
            // Act
            const result = removeTone(input);

            // Assert
            expect(result).toBe(expected);
        });
    });
});

describe('hasTone', () => {
    [null, undefined, 123, NaN].forEach((input) =>
        it('should throw an error if the input is not a string', () => {
            expect(() => hasTone(input as any)).toThrow('text is invalid');
        }),
    );

    [
        { input: 'các dấu sắc huyền ngã hỏi nặng sẽ mất đi', expected: true },
        { input: 'CÁC DẤU SẮC HUYỀN NGÃ HỎI NẶNG SẼ MẤT ĐI', expected: true },
        { input: 'day la doan van ban', expected: false },
        { input: 'NOTHING HERE', expected: false },
    ].forEach(({ input, expected }) => {
        test(`Input "${input}" should return ${expected}`, () => {
            // Act
            const result = hasTone(input);

            // Assert
            expect(result).toBe(expected);
        });
    });
});
