#### NestJs

Module là nơi liên kết giữa interfaces và implementation (thông qua cơ chế DI). Implementation chỉ được thấy trong module, bên ngoài module không truy cập được.

Interfaces thì có hai loại:

- Interface trong được thêm trong export để cho các module khác sử dụng.
- Interface sử dụng nội bộ trong module, trường hợp kích thước module lớn.

Về giao tiếp các modules, mỗi module đảm nhiệm business domain khác nhau, các module giao tiếp với nhau thông qua các interfaces được export. Ngoài ra, không có khái niệm DI giữa các modules với nhau.

#### OOP

```
1 class just can implement 1 abstract class
1 class can implement many interface
```
