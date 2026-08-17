# Take Note

Một ứng dụng ghi chú đơn giản được xây dựng bằng HTML, CSS và JavaScript. Người dùng có thể tạo, ghim, chỉnh sửa và xóa ghi chú ngay trên trình duyệt.

## Tính năng

- Thêm ghi chú mới
- Ghim ghi chú ở phần "Đã ghim"
- Chỉnh sửa nội dung ghi chú
- Xóa ghi chú
- Lưu dữ liệu trong trình duyệt bằng `localStorage`
- Giao diện đơn giản, dễ sử dụng

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript

## Cấu trúc dự án

```bash
Take-note/
├── index.html
├── style.css
├── main.js
├── keepnote-removebg-preview.png
├── README.md
└── ...
```

## Demo

Trải nghiệm trực tiếp tại đây:
https://heimingtou.github.io/ghi-ch-/

## Hướng dẫn sử dụng

1. Nhập nội dung ghi chú vào ô nhập ở thanh điều hướng.
2. Nhấn nút `Save` để lưu ghi chú.
3. Click vào một ghi chú để chỉnh sửa.
4. Dùng biểu tượng ghim để giữ ghi chú trong phần "Đã ghim".
5. Dùng biểu tượng thùng rác để xóa ghi chú.

## Lưu ý

- Dữ liệu ghi chú được lưu trong `localStorage` của trình duyệt, nên sẽ còn tồn tại khi bạn reload trang.
- Nếu bạn xóa dữ liệu trình duyệt hoặc xoá `localStorage`, các ghi chú sẽ bị mất.

## Tác giả

- Tác giả: Hà Minh Thơ
- Dự án mini project Note App được xây dựng để thực hành frontend cơ bản.
