import { test } from "@playwright/test";


test("Test 4", async ({ page }) => {
  await test.step('Truy cap trang va di toi bai hoc 4', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
  });

  await test.step('Them 10 note', async () => {
    for (let i = 0; i < 10; i++) {
        await page.locator('//input[@id="note-title"]').fill('Mô tả');
        await page.locator('//textarea[@id="note-content"]').fill('Học playwright cùng sếp Phong');
        await page.locator('//button[@id="add-note"]').click();
    }
  });

  await test.step('Search keyword', async () => {
    await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
  });
});