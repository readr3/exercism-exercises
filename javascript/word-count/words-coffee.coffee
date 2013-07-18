class Words
	constructor: (phrase) ->
		@wordList = phrase.toLowerCase().split /\W+/

	@count: ->
		{ word: 1 }