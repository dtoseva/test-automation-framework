import { Locator, Page } from "@playwright/test";
import { ENV } from "../test-data/users";
import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('.error-message-container h3');
    }

    async open(): Promise<void> {
        await this.navigate('/');
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAsStandardUser(): Promise<void> {
        await this.login(ENV.STANDARD_USER, ENV.STANDARD_PASSWORD);
        await expect(this.page).toHaveURL('/inventory.html');
    }

    async loginAsLockedUser(): Promise<void> {
        await this.login(ENV.LOCKED_USER, ENV.STANDARD_PASSWORD);
    }

    async loginWithInvalidCredentials(): Promise<void> {
        await this.login('wrong_user', 'wrong_password');
    }

    async validateMessage(message: string): Promise<void> {
        await expect(this.errorMessage).toHaveText(message);
    }
}
