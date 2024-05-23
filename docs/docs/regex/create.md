---
sidebar_position: 1
---

# Tạo regex tìm kiếm tiếng Việt

## Tạo regex

```typescript
import { createRegex } from '@vn-utils/text';

createRegex('Tiếng Việt');
```

## Sử dụng regex

### Mặc định

```typescript
import { createRegex } from '@vn-utils/text';

const data = [
    'Hà Nội',
    'Hải Phòng',
    'Thành phố Hồ Chí Minh',
    'Đà Nẵng',
    'Thanh Hóa',
    'Tuyên Quang',
    'Thái Nguyên',
];

data.filter((item) => createRegex('Ha Noi').test(item)); // [ 'Hà Nội' ]
data.filter((item) => createRegex('Hải').test(item)); // [ 'Hải Phòng' ]
data.filter((item) => createRegex('Hai').test(item)); // [ 'Hải Phòng', 'Thái Nguyên' ]
```

### Phân biệt chữ hoa và chữ thường

```typescript
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

const data = [
    'Hà Nội',
    'Hải Phòng',
    'Thành phố Hồ Chí Minh',
    'Đà Nẵng',
    'Thanh Hóa',
    'Tuyên Quang',
    'Thái Nguyên',
];

const options: CreateRegexOptions = {
    sensitive: true,
};

data.filter((item) => createRegex('HA NOI', options).test(item)); // [] => not found
data.filter((item) => createRegex('HA Noi', options).test(item)); // [] => not found

data.filter((item) => createRegex('Ha Noi', options).test(item)); // [ 'Hà Nội' ]
data.filter((item) => createRegex('Thanh', options).test(item)); // [ 'Thành phố Hồ Chí Minh', 'Thanh Hóa' ]
```

### Tìm kiếm nghiêm ngặt

#### Giống với từ khoá về viết hoa hay viết thường

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

const data = [
    'Hà Nội',
    'Hải Phòng',
    'Thành phố Hồ Chí Minh',
    'Đà Nẵng',
    'Thanh Hóa',
    'Tuyên Quang',
    'Thái Nguyên',
    'pHải GIỐng thế này, thì TÌM mỚi RA',
];

const options: CreateRegexOptions = {
    sensitive: true,
    outputCase: 'same',
};

data.filter((item) => createRegex('phải', options).test(item)); // [] => not found
data.filter((item) => createRegex('PHẢI', options).test(item)); // [] => not found
data.filter((item) => createRegex('ph', options).test(item)); // [ 'Thành phố Hồ Chí Minh' ] => not what i want

data.filter((item) => createRegex('pHải', options).test(item)); // [ 'pHải GIỐNG thế này, thì TÌM mỚi RA' ]
data.filter((item) => createRegex('GIỐng', options).test(item)); // [ 'pHải GIỐNG thế này, thì TÌM mỚi RA' ]
data.filter((item) => createRegex('pHải GIỐng', options).test(item)); // [ 'pHải GIỐNG thế này, thì TÌM mỚi RA' ]
```

#### Chỉ tìm chữ viết thường

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

const data = ['chỉ tìm được chữ viết thường', 'CÒN CHỮ VIẾT HOA SAO MÀ THẤY'];

const options: CreateRegexOptions = {
    sensitive: true,
    outputCase: 'lower',
};

data.filter((item) => createRegex('hoa', options).test(item)); // [] - not found
data.filter((item) => createRegex('HOA', options).test(item)); // [] - not found

data.filter((item) => createRegex('chữ', options).test(item)); // [ 'chỉ tìm được chữ viết thường' ]
data.filter((item) => createRegex('CHỮ', options).test(item)); // [ 'chỉ tìm được chữ viết thường' ]
```

#### Chỉ tìm chữ viết hoa

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

const data = ['CHỈ TÌM CHỮ VIẾT HOA', 'còn chữ viết thường đúng chịu'];

const options: CreateRegexOptions = {
    sensitive: true,
    outputCase: 'upper',
};

data.filter((item) => createRegex('viết thường', options).test(item)); // [] - not found
data.filter((item) => createRegex('đúng chịu', options).test(item)); // [] - not found

data.filter((item) => createRegex('chữ', options).test(item)); // [ 'CHỈ TÌM CHỮ VIẾT HOA' ]
data.filter((item) => createRegex('CHỮ', options).test(item)); // [ 'CHỈ TÌM CHỮ VIẾT HOA' ]
```

#### Tìm cả chữ viết hoa và chữ viết thường

:::warning
Nhớ đặt `sensitive: false` để có thể tìm tất cả chữ viết hoa và chữ viết thường
:::

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

const data = ['CHỮ VIẾT HOA', 'hay chữ viết thường', 'đều tìm thấy'];

const options: CreateRegexOptions = {
    // highlight-next-line
    sensitive: false,
    outputCase: 'lowerAndUpper',
};

data.filter((item) => createRegex('chữ', options).test(item)); // ['CHỮ VIẾT HOA', 'hay chữ viết thường']
data.filter((item) => createRegex('VIẾT', options).test(item)); // ['CHỮ VIẾT HOA', 'hay chữ viết thường']
data.filter((item) => createRegex('CHỮ viết', options).test(item)); // ['CHỮ VIẾT HOA', 'hay chữ viết thường']
```
