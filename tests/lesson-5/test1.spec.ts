import { test } from "@playwright/test";

test('Test 1', async ({ page }) => {
  await test.step('Truy cập trang va di toi bai hoc 1', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="01-xpath-register-page.html"]').click();
  });

  await test.step('Dien thong tin', async () => {
    await page.locator('//input[@id="username"]').fill('Dang Nguyen Hai');
    await page.locator('//input[@id="email"]').fill('hai1@gmail.com');
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page
      .locator('//select[@id="interests"]')
      .selectOption(['Art', 'Music', 'sports']);
    await page
      .locator('//select[@id="country"]')
      .selectOption({ label: 'United Kingdom' });
    await page.locator('//input[@id="dob"]').fill('1999-03-12');
    await page.locator('//input[@id="profile"]').setInputFiles('data/image.jpg');
    await page.locator('//textarea[@id="bio"]').fill('I am a QE');
  });

  await test.step('Click Register', async () => {
    await page.locator('//button[@type="submit"]').click();
  });
});
