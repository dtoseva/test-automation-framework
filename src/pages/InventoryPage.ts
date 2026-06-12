import { Locator, Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {

    readonly inventoryItems: Locator;
    readonly header: HeaderComponent;
    readonly filter: Locator;

    constructor(page: Page) {
        super(page);
        this.inventoryItems = page.locator('.inventory_item');
        this.header = new HeaderComponent(page);
        this.filter = page.locator('.product_sort_container');
    }

    async getInventoryItemCount(): Promise<number> {
        return this.inventoryItems.count();
    }
}
