import{test, expect, Locator} from "@playwright/test";

test("XPath axes demo in Playwright", async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp", {
    waitUntil: "domcontentloaded",
});

//1. self axis - Select <td> element that contains "Germany"
const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
await expect(germanyCell).toHaveText('Germany');

//2. parent axis - Get parent <tr> of the "Germany"cell

const parentRow: Locator = page.locator("//td[text()='Germany']/parent::tr");
//await expect(parentRow).toContainText("Maria Anders");
console.log(await parentRow.textContent());

//3. child axis - Get all <td> children of the parent <tr> of the "Germany" cell

const secondRowCells: Locator = page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(secondRowCells).toHaveCount(3);

//4. ancestor axis - Get ancestor <table> of the "Germany" cell

const ancestorTable: Locator = page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestorTable).toHaveAttribute("id", "customers");

//5. descendant axis - Get all <td> descendants of the ancestor <table> of the "Germany" cell
const descendantCells: Locator = page.locator("//table[@id='customers']/descendant::td");
await expect(descendantCells).toHaveCount(18);

//6. following axis - Get all <td> elements that follow the "Germany" cell in the document
const followingCell: Locator = page.locator("//td[normalize-space()='Germany']/following::td[1]");
await expect(followingCell).toHaveText("Centro comercial Moctezuma");

//7. following-sibling axis - Get all <td> elements that are siblings of the "Germany" cell
const followingSiblingCells: Locator = page.locator("//td[normalize-space()='Germany']/following-sibling::td");
await expect(followingSiblingCells).toHaveCount(0);
//await expect(followingSiblingCells.first()).toHaveText("Centro commercial Moctezuma");

//8. preceding axis - Get all <td> elements that precede the "Germany" cell in the document
const precedingCell: Locator = page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(precedingCell).toHaveText("Maria Anders");

//9. preceding-sibling axis - Get all <td> elements that precede the "Germany" cell in the document
const precedingSiblingCells: Locator = page.locator("//td[text()='Germany']/preceding-sibling::td");
await expect(precedingSiblingCells).toHaveCount(2);
await expect(precedingSiblingCells.first()).toHaveText("Alfreds Futterkiste");


})