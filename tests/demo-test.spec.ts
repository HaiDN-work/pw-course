import {test} from '@playwright/test'

test('Demo test 01', async ({ page }) => {
    await test.step('Step 1: Di den trang material', async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step('Step 2: Click vao bai hoc 1', async () => {
        const baiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        await baiHoc1Locator.click();

        // Check vao o Traveling
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='cooking']").check();
    });
});