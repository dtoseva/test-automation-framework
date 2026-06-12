import { test as setup } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.loginAsStandardUser();

    await page.context().storageState({ path: authFile });
});
