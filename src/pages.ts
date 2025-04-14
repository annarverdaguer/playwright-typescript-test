import { Page, Locator } from '@playwright/test';

export class BrowserPage {
    constructor(private page: Page, private readonly baseUrl: string) {
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async clickOn(element: Locator) {
        await element.click()
    }

    async fillIn(element: Locator, text: string) {
        await element.fill(text)
    }

    async getText(element: Locator): Promise<string | null> {
        return await element.textContent()
    }
}
