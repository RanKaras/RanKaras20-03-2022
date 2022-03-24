const {
    Given,
    When,
    Then,
    Before,
    After,
} = require('@cucumber/cucumber')
const assert = require('assert')
const expect = require('chai').expect;
const {
    setDefaultTimeout
} = require('@cucumber/cucumber')
setDefaultTimeout(6000)
const {
    By,
    Key,
    until
} = require('selenium-webdriver')
const {
    initDriver
} = require('../support/driverUtil')


let driver
Before(() => {
    driver = initDriver()
})
After(() => {
    driver.quit()
})




Given('The user visits the website', async () => {
    await driver.get('https://automation.herolo.co.il/')
})
When('The user validate the footer', async () => {
    await driver.findElement(By.className('Footer__Label-sc-159s1ql-1 jpENvN')).getText().then((item) => {
        expect(item).to.equal('איך אפשר לעזור?')
    })
})


When('The user types his first name {string}', async (name) => {
    await driver.findElement(By.name('name')).then((item) => {
        item.sendKeys(name)

    })
})


When('The user types his email address {string}', async (email) => {
    await driver.findElement(By.name('email')).then((item) => {
        item.sendKeys(email)
    })

})

When('The user types his phone number {string}', async (phone) => {
    await driver.findElement(By.name('phone')).then((item) => {
        item.sendKeys(phone)
    })
})

When('The user click on send', async () => {
    await driver.findElement(By.className('Footer__Button-sc-159s1ql-7 kOOAFW')).click()
})

Then('The User redirect to the thank you page', async () => {
    await driver.wait(until.elementLocated(By.className('thankYou__header-avz2fr-1 eZpUmN')), 10000);
    expectedURL = 'https://automation.herolo.co.il/thank-you/'
    currentUrl = await driver.getCurrentUrl()
    expect(currentUrl).to.equal(expectedURL)

})

Then('return error message below the text fields {string}', async (err) => {
    await driver.findElement(By.className('Footer__InputError-sc-159s1ql-5 blyfOW')).getText().then((item) => {
        expect(item).to.equal(err)
    })
})
