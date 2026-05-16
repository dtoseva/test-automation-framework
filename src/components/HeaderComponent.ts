import {Locator, Page} from "@playwright/test";

export class HeaderComponents {
    readonly page: Page;
    readonly shopingCartLink: Locator;
    readonly menuButton: Locator;
    readonly pageTitle: Locator;

    constructor(page:Page) {
        this.page = page;
        this.shopingCartLink = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.pageTitle = page.locator('.title')
    }
}