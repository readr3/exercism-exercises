module.exports = class DNA
  constructor: (sequence) ->
    @sequence = sequence
    @nucleotideCounts = @getNucleotideCounts()

  count: (nucleotide) ->
    NUCLEOTIDES = "ACGTU"

    if NUCLEOTIDES.indexOf(nucleotide) is -1
      throw new Error 'Invalid Nucleotide'
    else
      @occurrencesOf(nucleotide)

  getNucleotideCounts: ->
    A: @count 'A'
    T: @count 'T'
    C: @count 'C'
    G: @count 'G'

  occurrencesOf: (nucleotide) ->
    @sequence.split(nucleotide).length - 1