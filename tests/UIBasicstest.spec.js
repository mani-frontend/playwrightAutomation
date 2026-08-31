const {test, expect} = require("@playwright/test");

test("browser context playwright test", async ({ browser }) => {
  // chrome - plugins / cookies;
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const title = await page.title();
  console.log(title);

});
test("page playwright test", async ({ page }) => {
  await page.goto("https://google.com");
   const title =await page.title();
  console.log(title);
   await expect(title).toEqual("Google");
});
