import { test, expect } from '@playwright/test';
import { BrowserPage } from '../src/pages';
import { getYearFromText } from '../src/tools';
import { googleLocators, wikipediaLocators } from '../src/locators';

const googleBaseURL = 'https://google.com'
const wikipediaBaseURL = 'https://en.wikipedia.org'

test('[1st Exercise] Retrieve the year of the first automation process ', async ({ page }) => {
  const google = new BrowserPage(page, googleBaseURL);
  await google.open();
  await google.clickOn(googleLocators.cookiesAcceptButton);

  await google.clickOn(googleLocators.searchBox);
  await google.fillIn(googleLocators.searchBox, 'automation');
  await google.clickOn(googleLocators.searchButton);
  expect(page.url().startsWith(`${googleBaseURL}/search?`)).toBe(true)

  google.clickOn(googleLocators.wikipediaLink);
  expect(page.url()).toBe(`${wikipediaBaseURL}/wiki/Automation`)

  const wiki = new BrowserPage(page, `${wikipediaBaseURL}/wiki/Automation`)
  const paragraphText = await wiki.getText(wikipediaLocators.firstAutomatedProcessParagraph) ?? '';
  const year = getYearFromText(paragraphText);
  console.log(`The year of the first fully automated industrial process was on ${year}`)
  expect(year).toBe('1785');

  await page.screenshot({ path: 'screenshots/wikipediaScreenshot.png', fullPage: true });
});
