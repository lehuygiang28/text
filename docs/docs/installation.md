---
sidebar_position: 2
---

# Hướng dẫn cài đặt

## Cài đặt với các trình quản lý thư viện

### NPM

```bash
$ npm install @vn-utils/text
```

### Yarn

```bash
$ yarn add @vn-utils/text
```

### PNPM

```bash
$ pnpm install @vn-utils/text
```

### Browser

```html
<!-- Latest -->
<script src="https://cdn.jsdelivr.net/npm/@vn-utils/text@latest/lib/bundle.js"></script>

<!-- Or with selected version -->
<script src="https://cdn.jsdelivr.net/npm/@vn-utils/text@<VERSION>/lib/bundle.js"></script>
```

## Sử dụng thư viện

### Import thư viện

#### Node

```typescript
// ES Module
import * as vnUtilsText from '@vn-utils/text';

// CommonJS
const vnUtilsText = require('@vn-utils/text');
```

#### Browser

-   Sử dụng biến `vnUtilsText` để sử dụng thư viện

```html
<script>
    vnUtilsText.hasTone('các dấu sắc huyền ngã hỏi nặng có tồn tại');
</script>
```

-   Hoặc gán bằng biến mới:

```html
<script>
    const customVariable = vnUtilsText;
    customVariable.hasTone('các dấu sắc huyền ngã hỏi nặng có tồn tại');
</script>
```
