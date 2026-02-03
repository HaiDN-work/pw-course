import { test } from "@playwright/test";

test("Test 3", async ({ page }) => {
  await test.step('Truy cap trang va di toi bai hoc 3', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="03-xpath-todo-list.html"]').click();
  });

  await test.step('Tao 100 todo', async () => {
    for (let i = 0; i < 100; i++) {
        await page.locator('//input[@id="new-task"]').fill(`Todo <${i}>`);
        await page.locator('//button[@id="add-task"]').click();
    }
  });

  await test.step('Xoa cac todo so le', async () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 1) {
            await page.locator(`//button[@id="todo-${i}--delete"]`).click();
        }
    }
  });
});
