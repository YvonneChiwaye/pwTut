import{test,expect}from "@playwright/test";


//Syntax for writing a test case in playwright
/*
test("FirstTest", ()=>{

//step1
//step2
//step3


})
*/





//You have to pass a fixture to the arrow function to use the fixture in the test case
//A fixture is a global variable that is available in all the test cases. It is used to share data between test 
// cases. The fixture is passed as an argument to the arrow function. The fixture is an object that contains the 
// data that is shared between test cases. The fixture is created using the test.use() method. The fixture is 
// created in the beforeAll() method and destroyed in the afterAll() method. e.g. page, browser, context etc. are 
// fixtures that are available in all the test cases. The fixture is created using the test.use() method.


test("Verify page URL", async({page})=>{

await page.goto("https://playwright.dev/");

let url:string= await page.url();
console.log("URL: " + url);  
// Expect a title "to contain" a substring.
await expect(page).toHaveURL(/playwright.dev/); // One Assertion per function. If there is more than one assertion in a test case, the test case will fail.


})