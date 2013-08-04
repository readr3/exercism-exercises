bob = require('./example');

describe 'bob', ->

  it 'responds to stuff', ->
    expect(bob.hey('Tom-ay-to, tom-aaaah-to.')).toEqual 'Whatever.'

  it 'reacts to shouting', ->
    expect(bob.hey('WATCH OUT!')).toEqual 'Woah, chill out!'

  it 'blows off questions', ->
    expect(bob.hey('Does this cryogenic chamber make me look fat?'))
      .toEqual 'Sure.'

  it 'responds to talking forcefully', ->
    expect(bob.hey("Let's go make out behind the gym!")).toEqual 'Whatever.'

  it 'responds when there are acronyms', ->
    expect(bob.hey("It's OK if you don't want to go to the DMV."))
      .toEqual 'Whatever.'

  it 'reacts to shouted questions', ->
    expect(bob.hey('WHAT THE HELL WERE YOU THINKING?'))
      .toEqual 'Woah, chill out!'

  it 'reacts to shouting with numbers', ->
    expect(bob.hey('1, 2, 3 GO!')).toEqual 'Woah, chill out!'

  it 'reacts to shouting with special characters', ->
    expect(bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!'))
      .toEqual 'Woah, chill out!'

  it 'reacts to shouting even with no exclamation mark', ->
    expect(bob.hey('I HATE YOU')).toEqual 'Woah, chill out!'

  it 'responds to a statement containing a question mark', ->
    expect(bob.hey('Ending with ? means a question.')).toEqual 'Whatever.'

  it 'blows off prattling ending with a question', ->
    expect(bob.hey('Wait! Hang on. Are you going to be OK?')).toEqual 'Sure.'

  it 'gets irritated at silence', ->
    expect(bob.hey('')).toEqual 'Fine. Be that way!'

  it 'gets irritated at null', ->
    expect(bob.hey(null)).toEqual 'Fine. Be that way!'

  it 'gets irritated at undefined', ->
    expect(bob.hey(undefined)).toEqual 'Fine. Be that way!'

  it 'gets irritated at prolonged silence', ->
    expect(bob.hey('      ')).toEqual 'Fine. Be that way!'