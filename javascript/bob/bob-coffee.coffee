class Bob

  @hey: (phrase) ->
    switch
      when isSilent phrase then 'Fine, be that way.'
      when isShouting phrase then 'Woah, chill out!'
      when isAskingAQuestion phrase then 'Sure.'
      else 'Whatever.'

  @isSilent: (phrase) ->
    phrase == ''

  @isShouting: (phrase) ->
    phrase.toUppercase == phrase

  @isAskingAQuestion: (phrase) ->
    /\?$/.test phrase