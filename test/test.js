require('chai').should()
var emoji = require('../')

describe('react-easy-emoji', () => {
	it ('should work', () => {
		var elements = emoji('This is really 😄')

		elements.should.have.lengthOf(2)
		elements[0].should.equal('This is really ')

		var element = elements[1]

		element.type.should.equal('img')
		element.props.alt.should.equal('😄')
		element.key.should.equal('15')
		element.props.src.should.equal('//twemoji.maxcdn.com/2/72x72/1f604.png')
	})
	it ('should ignore the protocol option if one is provided in the baseUrl', () => {
		var element = emoji('😄', { baseUrl: 'https://someurl.com/'})[0]
		element.props.src.should.equal('https://someurl.com/72x72/1f604.png')
	})
})