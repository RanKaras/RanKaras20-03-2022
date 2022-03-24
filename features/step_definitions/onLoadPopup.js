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


When('The user wait for the popup to appear', {
    timeout: 45000
}, async () => {
    await driver.findElement(By.id('name')).sendKeys('name')
    await driver.wait(until.elementLocated(By.className('onUnloadPopup__Label-v34ylr-11 doJHUJ')), 35000).then((item) => {
        console.log(item)
    })

})

Then('the use click on X button', async () => {
    await driver.findElement(By.className('onUnloadPopup__CloseModalBtn-v34ylr-1 gFThxT')).click()
})


Then('The user set his first name {string}', async (name) => {
    await driver.findElements(By.className('onUnloadPopup__Input-v34ylr-18 kCHUMm')).findElement(By.name('name')).then((item) => {
        item.sendKeys(name)
    })

})

Then('the user set his phone number {string}', async (phone) => {
    await driver.findElements(By.className('onUnloadPopup__InputDiv-v34ylr-14 icGXdP')).findElement(By.name('email')).then((item) => {
        item.sendKeys(phone)
    })
})

Then('the user set his email address {stirng}', async (email) => {
    await driver.findElements(By.className('onUnloadPopup__InputDiv-v34ylr-14 icGXdP')).findElement(By.name('email')).then((item) => {
        item.sendKeys(email)
    })
})

Then('the user click on send', async () => {
    await driver.findElement(By.className('onUnloadPopup__Button-v34ylr-19 cUxvnt')).click()
})

Then('return error message below the text field {string}', async (err) => {
    await driver.findElement(By.className('onUnloadPopup__InputError-v34ylr-15 dsvIDy')).getText().then((item) => {
        expect(item).to.equal(err)
    })
})
