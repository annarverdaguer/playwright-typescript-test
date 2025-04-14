import { test, expect } from '@playwright/test';
import { BrowserPage } from '../src/pages';
import { getYearFromText } from '../src/tools';

test('[1st Exercise] Retrieve the year of the first automation process ', async ({ page }) => {
  const google = new BrowserPage(page, 'https://google.com');
  await google.open();

  const googleCookiesAccept = page.getByRole('button', { name: 'Aceptar todo' });
  await google.clickOn(googleCookiesAccept);

  const googleSearchBox = page.getByRole('combobox', { name: 'Buscar' });
  await google.clickOn(googleSearchBox);
  await google.fillIn(googleSearchBox, 'automation');

  const googleSearchButton = page.getByRole('button', { name: 'Buscar con Google' }).first();
  await google.clickOn(googleSearchButton);
  expect(page.url().startsWith('https://www.google.com/search?')).toBe(true)

  const googleResultsWikipedia = page.getByRole('link', { name: 'Automation - Wikipedia' });
  google.clickOn(googleResultsWikipedia);
  expect(page.url()).toBe('https://en.wikipedia.org/wiki/Automation')

  const wiki = new BrowserPage(page, 'https://en.wikipedia.org/wiki/Automation')
  const firstAutomatedProcess = page.getByRole('paragraph').filter({ has: page.getByTitle('Oliver Evans') });
  const firstAutomatedProcessText = await wiki.getText(firstAutomatedProcess) ?? '';
  const year = getYearFromText(firstAutomatedProcessText);
  console.log(`The year of the first fully automated industrial process was on ${year}`)
  expect(year).toBe('1785');
});
