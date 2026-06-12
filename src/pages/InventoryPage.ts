import { expect, Locator, Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { BasePage } from "./BasePage";
import { SORT_OPTIONS } from "../test-data/sort_options";

export class InventoryPage extends BasePage {

    readonly inventoryItems: Locator;
    readonly header: HeaderComponent;
    readonly filter: Locator;
    readonly itemPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.inventoryItems = page.locator('.inventory_item');
        this.header = new HeaderComponent(page);
        this.filter = page.locator('.product_sort_container');
        this.itemPrice = page.locator('.inventory_item_price');
    }

    async getInventoryItemCount(): Promise<number> {
        return this.inventoryItems.count();
    }

    async sortLowToHigh(): Promise<void> {
        await this.filter.selectOption(SORT_OPTIONS.OPTIONS.LOW_TO_HIGH);
        const prices = await this.getItemPrices();
        expect(prices).toEqual([...prices].sort((a, b) => a - b));
    }

    async sortHighToLow(): Promise<void> {
        await this.filter.selectOption(SORT_OPTIONS.OPTIONS.HIGH_TO_LOW);
        const prices = await this.getItemPrices();
        expect(prices).toEqual([...prices].sort((a, b) => b - a));
    }

    private async getItemPrices(): Promise<number[]> {
        const priceTexts = await this.itemPrice.allTextContents();
        return priceTexts.map(p => parseFloat(p.replace('$', '')));
    }
}
