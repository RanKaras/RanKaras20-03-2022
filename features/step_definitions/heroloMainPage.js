const {
    When,
    Then,
} = require('@cucumber/cucumber')
const expect = require('chai').expect;
const {
    setDefaultTimeout
} = require('@cucumber/cucumber');
setDefaultTimeout(100000)
const {
    By,
    until
} = require('selenium-webdriver')


When('The user enter his name {string}', async (name) => {
    await driver.findElement(By.id('name')).sendKeys(name)
})

When('The user enter his company name {string}', async (company) => {
    await driver.findElement(By.id('company')).sendKeys(company)
})

When('The user enter his email address {string}', async (email) => {
    await driver.findElement(By.id('email')).sendKeys(email)
})

When('The user enter his phone number {string}', async (phone) => {
    await driver.findElement(By.id('telephone')).sendKeys(phone)
})
Then('The user click on contact us button', async () => {
    await driver.findElement(By.className('commun__Button-zi6nvq-0 commun__ButtonContact-zi6nvq-1 form__ButtonContact-y0ft28-1 llCdxe')).click()
})

Then('The user checks that the popup is not visible', async () => {
    isClosed = await driver.findElement(By.className('Footer__Label-sc-159s1ql-1 jpENvN'))
    isClosed.isDisabled().then((item) => {
        expect(item.to.be.false)
    })
})
