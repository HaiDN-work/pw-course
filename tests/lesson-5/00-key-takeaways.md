// Function Declaration (khai báo hàm)
    function add(a, b) {
        return a + b;
    }

// Function Expression (biểu thức hàm)
    const add = function(a, b) {
        return a + b;
    };

// Arrow function (Lambda)
    const add = (a, b) => {
        return a + b;
    };

    // Cú pháp ngắn gọn nhất (implicit return)
        const add = (a, b) => a + b;
        console.log(add(2,3));
        const add = () => console.log(‘add’)

// Anonymous function (không tên)
    function() { // SyntaxError! Không thể đứng một mình
        console.log("I'm anonymous!");
    }
// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
    const anonymousFunc = function() {
        console.log("I'm anonymous but stored in avariable!");
    };

DOM (Document Object Model): 
- dạng cây có cấu trúc

1. Thẻ Cấu Trúc khung trang
- <html>: Thẻ gốc của trang
- <head>: Chứa metadata: tiêu đề website, hiển thị Google
- <body>: Nội dung của cả website hiển thị

2. Thẻ Bố Cục & Ngữ nghĩa
- <div>: Khối/container chung
- <span>: Inline container (phần tử nội tuyến)
- <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa

3. Thẻ Nội Dung:
- <h1> đến <h6>: Tiêu đề
- <p>: Đoạn văn
- <ul>, <ol>, <li>: Danh sách

4. Thẻ Tương Tác & Media:
- <a>: Liên kết
- <img>: Hình ảnh

5. Thẻ Form (Quan trọng cho Testing):
- <form>: Biểu mẫu
- <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
- <button>: Nút bấm
- <select> và <option>: Dropdown
- <textarea>: Vùng văn bản nhiều dòng

Selector
- công cụ giúp ta tìm những phần tử trên trang web
- Có 3 loại selector thường dùng:
    + XPath
        Dùng được trong hầu hết các trường hợp (99.99%)
        ○ Đa dạng, có khả năng tìm các phần tử khó
        ○ Hơi dài
        ○ VD: //button[normalize-space() = ‘Add to cart’]
    + CSS selector
        ○ Ngắn gọn, performance cao
        ○ Dùng cho các trường hợp dễ tìm.
        ○ Không linh hoạt bằng XPath
        ○ VD: .add-to-cart
    + Playwright selector
        ○ Chỉ dùng riêng cho Playwright
        ○ Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        ○ Hướng tới “giống người dùng đang nhìn thấy gì”
        ○ VD: page.getByText(“Add to cart”);

Playwright selector > CSS Selector > XPath

1. XPath = XML Path
- Có 2 loại:
    + Tuyệt đối: đi dọc theo cây DOM
        ■ bắt đầu bởi 1 /
        ■ /html/body/div/input
    + Tương đối: tìm dựa vào đặc tính
        ■ bắt đầu bởi 2 //
        ■ //tenthe[@thuoctinh=”giatri”]

● Nên dùng XPath tương đối


Playwright basic syntax

1. test: Đơn vị cơ bản để khai báo một test

    import { test } from '@playwright/test';

    test('<tên test>', async ({ page }) => {
        // Code của test
    });

2. step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
    await test.step('Tên step', async () => {
        // Code here
    });

    * Lưu ý: Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.

3. Navigate
    
    await page.goto('https://pw-practice.playwrightvn.com/');

4. Locate

    page.locator(“//input[@id=’email’]”)

5. Click
    
    //Single click
    await page.locator("//button").click();
    
    //Double click
    await page.locator("//button").dblclick();

    //Click chuột phải
    page.locator("//button").click({button: 'right'})

    //Click chuột kèm bấm phím khác
    page.locator("").click({modifiers: ['Shift']})

6. Input
   
    Fill
    Giống việc bạn paste content vào một ô input
    page.locator("//input").fill('Playwright Viet Nam');

    pressSequentially
    Giống việc bạn gõ từng chữ cái vào ô input
    page.locator("//input").pressSequentially('Playwright Viet Nam', {
        delay: 100,
    });

7. Radio/checkbox
   
    Lấy giá trị hiện tại đang là check hay không:
    const isChecked = page.locator("//input").isChecked();
    
    Check/ uncheck
    page.locator("//input").check();
    page.locator("//input").setChecked(false);

8. Select
    
    await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })

9. Upload file

    await page.locator("//input[@id='profile']").setInputFiles("<file-path>");