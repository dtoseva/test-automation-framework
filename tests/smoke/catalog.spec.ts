import { test, expect } from '../../src/fixtures/testFixtures';
import { SORT_OPTIONS } from '../../src/test-data/sort_options';

test.describe('Product Catalog', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/inventory.html');
    });

    test('Products are displayed', { tag: ['@smoke', '@regression'] }, async ({ inventoryPage }) => {
        const allItems = await inventoryPage.getInventoryItemCount();
        expect(allItems).toBeGreaterThan(0);
    });

    test('Sort products low to high', { tag: ['@smoke', '@regression'] }, async ({ inventoryPage }) => {
        await inventoryPage.sortLowToHigh();        
    });

    test('Sort products high to low', { tag: ['@regression'] }, async ({ inventoryPage }) => {
        await inventoryPage.sortHighToLow();        
    });
});
