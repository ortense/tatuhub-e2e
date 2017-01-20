// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'Demo test Google' : client =>
		client.url('http://www.google.com')
			.waitForElementVisible('body', 1000)
			.assert.title('Google')
			.assert.visible('input[type=text]')
			.setValue('input[type=text]', 'nightwatch.js')
			.waitForElementVisible('button[name=btnG]', 1000)
			.click('button[name=btnG]')
			.pause(1000)
			.assert.containsText('#navcnt .cur', '1')
			.end()
}
