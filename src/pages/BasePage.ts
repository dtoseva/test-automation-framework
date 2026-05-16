import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async navigate(path: string): Promise<void>{
        console.log(`Navigating to: ${path}`);
        await this.page.goto(path);
    }

    async validateUrl(): Promise<string> {
        return this.page.url();
    }
}