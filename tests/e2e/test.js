const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.prototypeTest1 = function (browser) {
  browser
    .url(urlLink)
    // .waitForElementVisible('body', 5000)
    .expect.title()
    .to.contain('Be Seasonable')
}

this.headerTest2 = function (browser) {
  browser
    .url(urlLink)
    // .waitForElementVisible('h1', 5000)
    .expect.element('h1')
    .text.to.equal('Be Seasonable')
  browser
    .url(urlLink)
    // .waitForElementVisible('h1', 5000)
    .expect.element('h1')
    .to.have.attribute('class').equals('ui inverted header')
}

this.listTest3 = function (browser) {
  browser
    .url(urlLink)
    // .waitForElementVisible('li', 5000)
    .expect.elements('li')
    .count.to.equal(27)
}
