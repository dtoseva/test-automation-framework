import { test } from '../../src/fixtures/testFixtures';
import { MESSAGES } from '../../src/test-data/messages';
import { ENV } from '../../src/test-data/users';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Successful login', { tag: ['@smoke', '@regression'] }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAsStandardUser();
    });

    test('Locked user', { tag: ['@regression'] }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAsLockedUser();
        await loginPage.validateMessage(MESSAGES.LOGIN.LOCKED_USER);
    });

    test('Invalid credentials', { tag: ['@regression'] }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginWithInvalidCredentials();
        await loginPage.validateMessage(MESSAGES.LOGIN.INVALID_CREDENTIALS);
    });

    test('Empty password shows required message', { tag: ['@regression'] }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.usernameInput.fill(ENV.STANDARD_USER);
        await loginPage.passwordInput.fill('');
        await loginPage.loginButton.click();
        await loginPage.validateMessage(MESSAGES.LOGIN.PASSWORD_REQUIRED);
    });

    test('Empty username shows required message', { tag: ['@regression'] }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.usernameInput.fill('');
        await loginPage.passwordInput.fill(ENV.STANDARD_PASSWORD);
        await loginPage.loginButton.click();
        await loginPage.validateMessage(MESSAGES.LOGIN.USERNAME_REQUIRED);
    });
});
