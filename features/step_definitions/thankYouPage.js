const {
    When,
    Then,
} = require('@cucumber/cucumber')
const expect = require('chai').expect;
const {
    setDefaultTimeout
} = require('@cucumber/cucumber')
setDefaultTimeout(20000)
const {
    By,
    until
} = require('selenium-webdriver')




When('The user click on the return button', async () => {
    await driver.findElement(By.className('thankYou__button-avz2fr-9 fIeAdZ')).click()
})

Then('The user redirect back to automation herolo page', async () => {
    await driver.wait(until.elementLocated(By.className('logo__TextContainer-tdfmt3-2 xassQ')), 10000);
    expectedURL = 'https://automation.herolo.co.il/'
    currentUrl = await driver.getCurrentUrl()
    expect(currentUrl).to.equal(expectedURL)
})

When('The user click on go to website', async () => {
    await driver.wait(until.elementLocated(By.className('thankYou__header-avz2fr-1 eZpUmN')), 10000);
    await driver.findElement(By.className('thankYou__button-avz2fr-9 fIeAdZ')).click()
})

Then('The user redirect back to', async () => {
    await driver.switchTo().newWindow('tab')
    await driver.wait(until.elementLocated(By.className('logo__TextContainer-tdfmt3-2 xassQ')), 10000);
    expectedURL = 'https://herolo.co.il/'
    currentUrl = await driver.getCurrentUrl()
    expect(currentUrl).to.equal(expectedURL)
})
