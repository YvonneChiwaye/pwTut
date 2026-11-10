/* CSS (Cascading Style Sheets) Locators Test Suite

html + js + css

2 Types of CSS locators we can generate:
1) Absolute CSS locators
2) Relative CSS locators


tag with id - tag#id
tag with class - tag.class
tag with any other attribute - tag[attr=value]
tag with the class and attribute - tag.class[attr=value]
tag is always optional.

page.locator(css\xpath)

*/



import { test, expect, Locator } from "@playwright/test";



test("Verify CSS locators in Playwright", async ({ page }) => {

await page.goto("https://demowebshop.tricentis.com/");

//tag#id
// const searchBox:Locator = page.locator("input#small-searchterms");
// await expect(searchBox).toBeVisible();
// await searchBox.fill("laptop");


//tag.class
// const searchBox:Locator = page.locator("input.search-box-text");
// await expect(searchBox).toBeVisible();
// await searchBox.fill("laptop");


//tag with any other attribute - tag[attr=value]
//await page.locator("input[name=q]").fill("iphone");

//tag with the class and attribute - tag.class[attr=value]
await page.locator("input.search-box-text[name=q]").fill("iphone");

await page.waitForTimeout(5000);


})

