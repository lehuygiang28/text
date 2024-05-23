---
sidebar_position: 0
---

# Biểu thức chính quy (regex) và tiếng Việt

## Giới thiệu

Biểu thức chính quy, hay regex (regular expressions), là công cụ mạnh mẽ để xử lý và tìm kiếm chuỗi ký tự. Trong lập trình và xử lý văn bản, regex giúp tìm kiếm, khớp mẫu và thao tác trên văn bản một cách hiệu quả, đặc biệt hữu ích khi kiểm tra tính hợp lệ, tách chuỗi, hoặc thay thế văn bản.

Bài viết này sẽ khám phá cách sử dụng regex với văn bản tiếng Việt. Với các đặc thù như dấu thanh và ký tự đặc biệt, sử dụng regex có thể gặp thách thức, nhưng nếu hiểu rõ và vận dụng tốt, bạn có thể giải quyết nhiều bài toán xử lý văn bản nhanh chóng và hiệu quả.

### Trước hết về tìm kiếm với text

Khi nói về việc tìm kiếm văn bản, một trong những ứng dụng phổ biến nhất của regex là tìm kiếm các mẫu ký tự cụ thể trong một đoạn văn bản. Ví dụ, bạn có thể muốn tìm tất cả các địa chỉ email trong một đoạn văn bản, các số điện thoại, hoặc các từ cụ thể nào đó.

Dưới đây là một số ví dụ cơ bản về việc sử dụng regex trong tìm kiếm:

1. _Tìm kiếm từ đơn giản_: Nếu bạn muốn tìm kiếm một từ cụ thể trong văn bản, bạn có thể sử dụng regex rất đơn giản. Ví dụ, để tìm từ "học", bạn chỉ cần sử dụng mẫu `học`.

2. _Tìm kiếm từ có dấu_: Tiếng Việt có nhiều dấu thanh, vì vậy việc tìm kiếm từ có dấu đòi hỏi mẫu regex phải chính xác. Ví dụ, để tìm từ "học", bạn có thể sử dụng mẫu `học` hoặc `h[oóọỏõ]c` để tìm các biến thể có dấu.

3. _Tìm kiếm tên một người_: Tên người Việt Nam thường bao gồm họ, tên đệm và tên. Một mẫu regex để tìm kiếm tên người Việt Nam có thể khá phức tạp do sự đa dạng và cấu trúc khác nhau của tên.

### Và đó là

#### Để tạo được các mẫu regex có thể tìm kiếm tiếng Việt như vậy, chúng ta sang [phần tiếp theo](/regex/create) để tạo regex thôi nào!!
