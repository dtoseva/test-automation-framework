import { test, expect } from "../../src/fixtures/testFixtures";

test.describe('Inventory components validations', () => {
    test('Validate main components on Inventory page', { tag: ['@smoke', '@regression'] }, async ({ inventoryPage, page }) => {
        await page.goto('/inventory.html');

        await expect(page).toHaveURL('/inventory.html');
        await expect(inventoryPage.header.pageTitle).toHaveText('Products');
        await expect(inventoryPage.header.shoppingCartLink).toBeVisible();
        expect(await inventoryPage.getInventoryItemCount()).toBeGreaterThan(0);
    });
});
