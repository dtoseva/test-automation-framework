import { Locator, Page } from "playwright-core";
import { ENV } from "../constants/env";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {    

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

    }

    async open(): Promise<void> {
        await this.navigate('/')
    }

    async login(username: string, password: string ): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAsStandartUser(): Promise<void> {
        await this.login(ENV.STANDARD_USER, ENV.STANDARD_PASSWORD);
    }
}