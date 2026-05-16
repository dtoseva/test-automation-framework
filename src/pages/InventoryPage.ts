import { Locator, Page } from "playwright-core";
import { HeaderComponents } from "../components/HeaderComponent";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage{
    
    readonly inventoryItems: Locator;
    readonly headers: HeaderComponents;    
    readonly filter: Locator;
    
    constructor(page:Page) {
        super(page);
        this.inventoryItems = page.locator('.inventory_item');
        this.headers = new HeaderComponents(page);
        this.filter = page.locator('.product_sort_container');
        
    }

    async getInventoryItemCount(): Promise<number> {
        return this.inventoryItems.count();
    }
}