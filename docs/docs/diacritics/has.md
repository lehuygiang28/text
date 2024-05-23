---
sidebar_position: 2
---

# Kiểm tra dấu phụ

-   Kiểm tra trong chuỗi có tồn tại dấu phụ hay không.

```typescript
import { hasDiacritics } from '@vn-utils/text';

hasDiacritics('ă, ê, ư, ô'); // true
hasDiacritics('a, b, d, e'); // false
```
