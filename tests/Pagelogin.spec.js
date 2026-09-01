const { test, expect } = require("@playwright/test");

test.only("basic test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const title = await page.title();
  console.log(title);

  await page.locator("#username").fill("rahul");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(await page.locator("[style*='block']").textContent()).toContain(
    "Incorrect",
  );
  await page.locator("#username").fill("");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#signInBtn").click();
  //   console.log(await page.locator(".card-body a").nth(0).textContent());
  //   console.log(await page.locator(".card-body a").nth(-2).textContent());
  // await page.waitForLoadState('networkidle');
  await page.locator(".card-body a").first().waitFor();
  console.log(await page.locator(".card-body a").allTextContents());
});
