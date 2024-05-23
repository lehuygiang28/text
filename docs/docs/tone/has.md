---
sidebar_position: 2
---

# Kiểm tra dấu thanh/âm

-   Kiểm tra trong chuỗi có tồn tại dấu thanh/âm hay không.

```typescript
import { hasTone } from '@vn-utils/text';

hasTone('các dấu sắc huyền ngã hỏi nặng có tồn tại'); // true
hasTone('khong co dau sac huyen nga hoi nang nao'); // false
```
