import {test, expect, Locator} from "playwright/test";



//Text Input/ Text Box/ Input Box
//Radio Buttons


//Text Input/ Text Box/ Input Box

test('Text input actions', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const textBox: Locator = page.locator('#name');

await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled() 

const maxLength : string | null = await textBox.getAttribute("maxlength");
expect(maxLength).toBe('15');
console.log(maxLength); // Returns the value of max length attribute of the element

await textBox.fill("John Chiwaye");

//console.log("Text content of First name",await textBox.textContent()); //Not going to work. returns empty string
const enteredValue: string = await textBox.inputValue()
console.log("Text content of First name",enteredValue); // returns the input value of textBox
expect(enteredValue).toBe("John Chiwaye");
await page.waitForTimeout(3000); //Thread.sleep in Java

});

//Radio Buttons

test.only('Radio Button actions', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const maleRadio:Locator = page.locator('#male'); // Male radio button

await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
expect(await maleRadio.isChecked()).toBe(false);


await maleRadio.check(); // select radio button
expect(await maleRadio.isChecked()).toBe(true);
expect(maleRadio).toBeChecked(); // Preffered alternative way to check if radio button is selected


await page.waitForTimeout(3000); //Thread.sleep in Java

});

