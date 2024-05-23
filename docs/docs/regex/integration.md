---
sidebar_position: 1
---

# Sử dụng kết hợp

## Kết hợp với xóa dấu phụ và xóa thanh

-   Cho phép input tìm kiếm là tiếng Việt có dấu đầy đủ, nhưng để tìm kiếm rộng và thu được nhiều kết quả hơn, ta sử dụng xóa dấu và xóa thanh kết hợp

```ts
import { createRegex, removeDiacritics, removeTone } from '@vn-utils/text';

const data = ['Có dấu đầy đủ', 'Có dau day du', 'Co dấu đầy du', 'Có dáu day'];

data.filter((item) => createRegex('Có dấu').test(item)); // 1 kết quả
data.filter((item) => createRegex(removeDiacritics('Có dấu')).test(item)); // 1 kết quả
data.filter((item) => createRegex(removeTone('Có dấu')).test(item)); // 0 kết quả

data.filter((item) => createRegex(removeTone(removeDiacritics('Có dấu'))).test(item)); // 4 kết quả
```

## Sử dụng với mongodb/mongoose

:::warning
Bạn cần tự cài đặt `model`
:::

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

/** ... */

const keywordRegex = createRegex('từ khoá tìm kiếm', options);

const foundData = await model.find({ $or: [{ name: keywordRegex }] });
```

-   Nếu phiên bản bạn sử dụng không hỗ trợ Javascript Regex

:::tip
Sử dụng `.source` và `.flags` trong `RegExp`
:::

```ts
import { createRegex, CreateRegexOptions } from '@vn-utils/text';

/** ... */

const keywordRegex = createRegex('từ khoá tìm kiếm', options);

const foundData = await model.find({
    $or: [{ name: { $regex: keywordRegex.source, $options: keywordRegex.flags } }],
});
```
