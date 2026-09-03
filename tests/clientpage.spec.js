const { test, expect } = require("@playwright/test");
test("Client page", async ({ page }) => {
  const productName = "adidas original";
  const products = page.locator(".card-body ");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("anishkashetty@gmail.com");
  await page.locator("[type='password']").fill("Anishka@123");
  await page.locator("#login").click();
  //await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const cardTitles = await page.locator(".card-body b").allTextContents();
  console.log(cardTitles);
  const productcount = await products.count();
  let productAdded = false;
  
  for (let i = 0; i < productcount; i++) {
    if ((await products.nth(i).locator("b").textContent()).toLowerCase() === productName.toLowerCase()) {
      //add to cart
      await products.nth(i).locator("text=  Add To Cart").click();
      productAdded = true;
      break;
    }
  }

  expect(productAdded).toBeTruthy();
  await page.locator("[routerlink*='cart']").click();
  const cartItems = page.locator("div li h3");
  await expect(cartItems).toHaveCount(1);
  await expect(cartItems).toContainText(productName, { ignoreCase: true });
});
