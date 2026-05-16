import {test} from '@playwright/test'

test.afterEach(async ({page}, testInfo) => {
    if(testInfo.status !== testInfo.expectedStatus) {
        console.log(`❌ Test failed: ${testInfo.title}`);
        const screenshot = await page.screenshot()

        await testInfo.attach('screenshot', {
            body: screenshot,
            contentType: 'image/png'
        });
    }
})