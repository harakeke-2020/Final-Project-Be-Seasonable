const urlLink = process.env.TEST_URL || 'http://localhost:3000'
const aboutLink = process.env.TEST_URL || 'http://localhost:3000/about'

this.titleTest = function (browser) {
  browser
    .url(urlLink)
    .waitForElementVisible('body', 5000)
    .expect.title()
    .to.contain('Be Seasonable')
}

this.headerTest = function (browser) {
  browser
    .url(urlLink)
    .waitForElementVisible('h1', 5000)
    .expect.element('h1')
    .text.to.equal('SHOP SEASONAL')
}

this.aboutPageTest = function (browser) {
  browser
    .url(aboutLink)
    .expect.elements('div')
    .count.to.equal(4)
  browser
    .expect.elements('p')
    .count.to.equal(14)
}
