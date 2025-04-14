import { Page } from '@playwright/test';
import { locatorByRoleType, locatorByRoleAndTitleType } from './types';
import { getLocatorByRole, getLocatorByRoleAndTitleFilter } from './tools';

export class BrowserPage {
    constructor(private page: Page, private readonly baseUrl: string) {
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async clickOn(element: locatorByRoleType) {
        await getLocatorByRole(this.page, element).click()
    }

    async fillIn(element: locatorByRoleType, text: string) {
        await getLocatorByRole(this.page, element).fill(text)
    }

    async getText(element: locatorByRoleAndTitleType): Promise<string | null> {
        return await getLocatorByRoleAndTitleFilter(this.page, element).textContent()
    }
}
