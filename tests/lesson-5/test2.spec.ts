import { test } from "@playwright/test";

test("Test 2", async ({ page }) => {
  await test.step('Truy cập trang va di toi bai hoc 2', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="02-xpath-product-page.html"]').click();
  });

  await test.step('Them san pham vao gio hang', async () => {
    const products = [
        {id: '//button[@data-product-id="1"]', qty: 2},
        {id: '//button[@data-product-id="2"]', qty: 1},
        {id: '//button[@data-product-id="3"]', qty: 3}
    ];

    for (const product of products) {
        for (let i = 0; i < product.qty; i++) {
            await page.locator(product.id).click();
        }
    }
  });
});