// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('table>thead>tr>th')
      .assert.containsText('#_id', 'Detail')
      .assert.elementCount('table>thead>tr [class^=vuetable-th-]', 10)
      .assert.elementCount('table>tbody>tr', 10)
      .end()
  }
}
