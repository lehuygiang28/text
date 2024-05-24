import { removeDiacritics, hasDiacritics } from '../src/diacritics';

describe('removeDiacritics', () => {
    it('should throw an error if the input is not a string', () => {
        // Arrange
        const invalidInputs = [null, undefined, 123];

        // Act & Assert
        invalidInputs.forEach((input) => {
            expect(() => removeDiacritics(input as any)).toThrow('text is invalid');
        });
    });

    it('should remove diacritics from text', () => {
        // Arrange
        const text = 'sắc huyền ngã hỏi nặng';
        const expected = 'sác huyèn ngã hỏi nạng';

        // Act
        const result = removeDiacritics(text);

        // Assert
        expect(result).toBe(expected);
    });

    it('should correctly map all lowercase diacritics', () => {
        // Arrange
        const diacritics = {
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

            đ: 'd',

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

        // Act & Assert
        Object.entries(diacritics).forEach(([diacritic, expected]) => {
            const result = removeDiacritics(diacritic);

            expect(result).toBe(expected.normalize());
        });
    });

    it('should correctly map all uppercase diacritics', () => {
        // Arrange
        const diacritics = {
            Ắ: 'Á',
            Ấ: 'Á',
            Ằ: 'À',
            Ầ: 'À',
            Ẳ: 'Ả',
            Ẩ: 'Ả',
            Ẵ: 'Ã',
            Ẫ: 'Ã',
            Ặ: 'Ạ',
            Ậ: 'Ạ',

            Đ: 'D',

            Ố: 'Ó',
            Ớ: 'Ó',
            Ồ: 'Ò',
            Ờ: 'Ò',
            Ổ: 'Ỏ',
            Ở: 'Ỏ',
            Ỗ: 'Õ',
            Ỡ: 'Õ',
            Ộ: 'Ọ',
            Ợ: 'Ọ',

            Ế: 'É',
            Ề: 'È',
            Ể: 'Ẻ',
            Ễ: 'Ẽ',
            Ệ: 'Ẹ',

            Ứ: 'Ú',
            Ừ: 'Ù',
            Ử: 'Ủ',
            Ữ: 'Ũ',
            Ự: 'Ụ',
        };

        // Act & Assert
        Object.entries(diacritics).forEach(([diacritic, expected]) => {
            const result = removeDiacritics(diacritic);

            expect(result).toBe(expected.normalize());
        });
    });
});

describe('hasDiacritics', () => {
    it('should return true if the text has diacritics', () => {
        // Arrange
        const text = 'sắc huyền ngã hỏi nặng';

        // Act
        const result = hasDiacritics(text);

        // Assert
        expect(result).toBe(true);
    });

    it('should return false if the text does not have diacritics', () => {
        // Arrange
        const text = 'sac huyen nga hoi nang';

        // Act
        const result = hasDiacritics(text);

        // Assert
        expect(result).toBe(false);
    });

    it('should throw an error if the input is not a string', () => {
        // Arrange
        const invalidInputs = [null, undefined, 123];

        // Act & Assert
        invalidInputs.forEach((input) => {
            expect(() => hasDiacritics(input as any)).toThrow('text is invalid');
        });
    });
});
