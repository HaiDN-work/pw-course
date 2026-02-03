import { test } from "@playwright/test";


test("Test 4", async ({ page }) => {
  await test.step('Truy cap trang va di toi bai hoc 4', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
  });

  await test.step('Them 10 note', async () => {
    const notes = [
      {title: 'click', content: 'Hàm click dùng để thực hiện click vào các phần tử trên trang web'},
      {title: 'fill', content: 'Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web'},
      {title: 'type', content: 'Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng'},
      {title: 'hover', content: 'Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover'},
      {title: 'check', content: 'Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked'},
      {title: 'uncheck', content: 'Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked'},
      {title: 'selectOption', content: 'Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown'},
      {title: 'press', content: 'Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác'},
      {title: 'dblclick', content: 'Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web'},
      {title: 'dragAndDrop', content: 'Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web'},
    ];
    
    for (const note of notes) {
        await page.locator('//input[@id="note-title"]').fill(note.title);
        await page.locator('//textarea[@id="note-content"]').fill(note.content);
        await page.locator('//button[@id="add-note"]').click();
    }
  });

  await test.step('Search keyword', async () => {
    await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
  });
});