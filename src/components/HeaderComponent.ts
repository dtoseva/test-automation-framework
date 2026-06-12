import { Locator, Page } from "@playwright/test";

export class HeaderComponent {
    readonly shoppingCartLink: Locator;
    readonly menuButton: Locator;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.pageTitle = page.locator('.title');
    }
}
