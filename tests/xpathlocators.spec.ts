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

//4. start-with()
const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]"); //returns multiple elements
const count: number = await buildingProducts.count();
expect(count).toBeGreaterThan(0);
console.log("Number of building products:", count);

//5. text()
const reglink:Locator = page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();

//6. last()
const lastItem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
await expect(lastItem).toBeVisible();
console.log("Text content of last element:", await lastItem.textContent());

//7. position()
const positionItem: Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
await expect(positionItem).toBeVisible();
console.log("Text content of positioned element:", await positionItem.textContent());

})