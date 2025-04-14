Hi there! This is the solution I implemented for the SQLI QA Test Automation Specialist hiring process. 

In there you can find the code related to two exercies:
- UI Test
- API Tests

In this repo I used PLaywright and Typescript to develop it, and my goal was to have clean and readable code, even though for small projects like this one, some things might look like overengineering. In the UI test, I found the issue of Google throwing recaptcha to verify I wasn't a robot 🤖 well Google, indeed I am... In the few times Google wasn't making my life difficult, I found some difficulties on loading the Google search. So I did a workaround to test my last part of the UI test (Wikipedia part). If you encounteer the same problems as me, I recommend you to do this:

```

  const wiki = new BrowserPage(page, `${wikipediaBaseURL}/wiki/Automation`)
  wiki.open()
  const paragraphText = await wiki.getText(wikipediaLocators.firstAutomatedProcessParagraph) ?? '';
  const year = getYearFromText(paragraphText);
  console.log(`The year of the first fully automated industrial process was on ${year}`)
  expect(year).toBe('1785');

  await page.screenshot({ path: 'screenshots/wikipediaScreenshot.png', fullPage: true });

```
That's it. I had lots of fun coding this :) Thank you for the opportunity 🙂
