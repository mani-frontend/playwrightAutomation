const { test, expect } = require("@playwright/test");

test("UI Controls", async ({ page }) => {
  const UserName = page.locator("#username");
  const password = page.locator("[type='password']");
  const blinkingText= page.locator("[href*='documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await UserName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await page.locator(".radiotextsty").nth(1).click();
  await page.locator("#okayBtn").click();
  expect (await page.locator(".radiotextsty").nth(1)).toBeChecked();
  console.log(await page.locator(".radiotextsty").nth(1).isChecked());
  const dropdown = await page.locator("select.form-control");
  await dropdown.selectOption("consult");
  await page.locator("#terms").click();
  await page.locator("#terms").uncheck();
  console.log(await page.locator("#terms").isChecked());
 await expect(blinkingText).toHaveAttribute("class", "blinkingText");
 await blinkingText.click();
  //await page.locator("#signInBtn").click();
  //await page.pause();
});

test("child windowhandling",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
   const documentlink= page.locator("[href*='documents-request']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// if we open on new page we go for promise .all
    const [newpage]= await Promise.all([
      context.waitForEvent('page'),
      documentlink.click()
    ]);//it will wait for open new page and click on the link  both at same time and it will return result in array
    console.log(await newpage.locator(".red").textContent());

});
test.only("multiple child windows",async({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//const qaassesments= page.locator("[href='https://techsmarthire.com/']" );
//const QAassesments= page.locator(".blinkingText" ).nth(1);

 const documentlink= page.locator("[href*='documents-request']");

 const [child1 ]=await Promise.all([
    context.waitForEvent('page'),
    documentlink.click(),
    // qaassesments.click(),
 ])
  await child1.waitForLoadState();
  console.log("child 1 url is",await child1.url());

console.log("main page url is",await page.url());


// const [child2]=await Promise.all([
//     context.waitForEvent('page'),
//     QAassesments.click({force:true})
//  ]);
//   await child2.waitForLoadState();
//   console.log("child2 url is",await child2.url());


});