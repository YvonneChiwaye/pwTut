import {test, expect, Locator} from "@playwright/test";

test("XPath demo in Playwright", async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

// 1. Absolute xpath
const absolutelogo:Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
await expect(absolutelogo).toBeVisible();

//2. Relative xpath
const relativelogo:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(relativelogo).toBeVisible();

//3. contains() function

const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
const productsCount = await products.count();
console.log("Number of computer related Products:", productsCount);
expect(productsCount).toBeGreaterThan(0);

//console.log("Text content of products:", await products.textContent());//error: strict mode violation

console.log("First computer relatedproduct:", await products.first().textContent()); //prints the text content of the first element in the locator
console.log("Last computer relatedproduct:", await products.last().textContent());
console.log("Nth computer relatedproduct:", await products.nth(2).textContent());

let productTitles: string[] =  await products.allTextContents();

for(let pt of productTitles){
    console.log("Product Title:", pt);
}

})