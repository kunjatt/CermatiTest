import * as data from '../pages/signUp'
import * as base from '../common/base-function'
const dotenv = require('dotenv');

dotenv.config()

let linkUrl = 'https://www.cermati.com/gabung-v2?'
let page;

describe('Go to Url', () =>{
  test('Sign up', async() => {
    page =  await base.launchPuppeteer()
    await base.overridePermissions()
    await page.goto(linkUrl)
    await base.typeValueElementXpath(data.element.inputEmail, 'bilton.zoldyck@gmail.com')
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.inputPassword, process.env.PASSWORD)
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.confirmPassword, process.env.PASSWORD)
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.inputFirstname, 'Bilton')
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.inputLastname, 'Zoldyck')
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.inputPhoneNumber, '082121907493')
    await page.waitForTimeout(1000)
    await base.typeValueElementXpath(data.element.inputCity, 'KOTA BANDUNG')
    await page.waitForTimeout(1000)
    await base.clickElementXpath(data.element.btnSignUp)
    await base.sleep(5000)
    await base.closePuppeteer()
  })
})