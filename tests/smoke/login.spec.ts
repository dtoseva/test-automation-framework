import {test, expect} from "../../src/fixtures/testFixtures.ts";
import '../../src/fixtures/testHooks';
import { ENV } from "../../src/constants/env.ts";

test.describe('Login functionality', () =>{
    test('Standart user can login successfully',{tag: ['@smoke', '@regression']}, async({ inventoryPage, page}) => {
        
        await page.goto('/inventory.html')
        
        await expect(page).toHaveURL('/inventory.html');

        await expect(inventoryPage.headers.pageTitle).toHaveText('Products');
        await expect(inventoryPage.headers.shopingCartLink).toBeVisible();
        await expect(await inventoryPage.getInventoryItemCount()).toBeGreaterThan(0);

    });

    test('new test',{tag: ['@regression']}, async({ }) => {
        //todo        
        

    })
})