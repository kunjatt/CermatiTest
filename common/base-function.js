const puppeteer = require('puppeteer');
const fs = require('fs');
 
let browser;
let page;
let url;
 
export const launchPuppeteer = async () => {
 browser = await puppeteer.launch({
 headless: false,
 args: [
 '--suppress-message-center-popups',
 '--window-size=1350,768',
 ],
 });
 [page] = await browser.pages();
 await page.setViewport({ width: 1366, height: 768 });
 return page;
};
 
export const closePuppeteer = async () => {
 await browser.close();
};
 
export const overridePermissions = async (link) => {
 const context = browser.defaultBrowserContext();
 await context.overridePermissions(link, ['geolocation', 'notifications']);
};

export const sleep = async (miliSeconds) => {
    await page.waitForTimeout(miliSeconds);
   };
    
   export const getProperty = async (xpathQuery, property) => {
    await page.waitForXPath(xpathQuery);
    
    const elementHandle = await page.$x(xpathQuery);
    const propertyHandle = await elementHandle[0].getProperty(property);
    const propertyValue = await propertyHandle.jsonValue();
     
    return propertyValue;
   };
    
   export const typeValueElementXpath = async (selector, text) => {
    const elementHandle = await page.$x(selector);
    await elementHandle[0].type(text);
   };
    
   export const clickElementXpath = async (selector) => {
    await page.waitForXPath(selector);
    const elementHandle = await page.$x(selector);
    await elementHandle[0].click();
   };
    
   export const clickListDropdown = async (selector, value) => {
    await page.select(selector, value);
   };
    
   export const checkVisibleXpathElement = async (xpathQuery) => {
    const elementHandle = await page.$x(xpathQuery);
    return elementHandle;
   };
    
   export const expectElementEqualTextContent = async (selector, expectedText) => {
    const text = await getProperty(selector, 'textContent');
    expect(text).toEqual(expectedText);
   };
    
   export const expectElementContainTextContent = async (selector, expectedText) => {
    const text = await getProperty(selector, 'textContent');
    expect(text).toContain(expectedText);
   };

   export const expectURL = async (expectedUrl) => {
    const Url = await page.url();
    expect(Url).toEqual(expectedUrl);
   };

   export const getURL = async () => {
    await page.url();
};