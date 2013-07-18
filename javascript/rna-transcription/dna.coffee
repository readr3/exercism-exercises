class DNA
  constructor: (sequence) ->
    @sequence = sequence

  toRNA: ->
    @sequence.replace /T/g, 'U'

global.DNA = DNA