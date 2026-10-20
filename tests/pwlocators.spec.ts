/*  
Locator - identifies the element on the page
DOM - Document object Model
    - it ia an API Interface provided by the browser.
    - when launching a browser a DOM is automatically created.
    
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes
can be configured).

All these methods returen the fixture Locator
demo.nopcommerce.com
 */

import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({page}) => {

//await page.goto("https://demo.nopcommerce.com/");

//page.getByAltText() to locate an element, usually image, by its text alternative.
//use this locator when your element supports alt text such as img and area elements.

// const logo:Locator = page.getByAltText("nopCommerce demo store") // await statement has no effect on this statement
// await expect (logo).toBeVisible();

//page.getBText() - Find an element by the text it contains. You can match by a substring, exact string
// Locate by visible text
// Use this locator to find non interactive elements like div, span, p, etc.
// For interactive elements like a button, a, input, etc use role locators.

//const text:Locator = page.getByText("Welcome to our store")
//await expect(text).toBeVisible();

//await expect(page.getByText("Welcome to our store")).toBeVisible(); // One Assertion per function. If there is more than one assertion in a test case, the test case will fail.

//page.getByRole() to locate by explicit and implicit accessibility attributes.
// Locating by role(is not an attribute)
//Role locatores include buttons, checkboxes, Links, lists, tables, and many more and follow the WAI-ARIA specifications.

//await page.getByRole("link",{name:'Register'}).click();
//await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();// you can also use getByText() to locate the heading element. But getByRole() is preferred because it is more reliable and less prone to changes in the UI.

//page.getByLabel() to locate a form control by associated label's text
//When to use: Ideal for forms, where you want to locate an input field based on its label. It is more reliable than using getByText() or getByPlaceholder() because it is less prone to changes in the UI. 

// page.getByLabel('First name').fill("John");
// page.getByLabel('Last name').fill("Doe");
// page.getByLabel('Email').fill("John@Doe.com");

//page.getByPlaceholder() to locate an input by placeholder.
//When to use: Ideal for input fields that have a placeholder attribute. It is less reliable than other locators because placeholder text can change or be removed.

//page.getByPlaceholder("Search store").fill("Apple Mac Book Pro");
//await expect(page.getByPlaceholder("Search store")).toHaveValue("Apple Mac Book Pro");

//page.getByTitle() to locate an element by its title attribute.
//When to use: Ideal for elements that have a title attribute. It is less reliable than other locators because title text can change or be removed.

//page.getByTestId() to locate an element based on its data-testid attribute (other attributes
//can be configured).


})
