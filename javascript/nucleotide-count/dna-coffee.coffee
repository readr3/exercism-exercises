class DNA
  constructor: (sequence) ->
    @sequence = sequence

  occurrencesOf: (nucleotide) ->
    @sequence.split(nucleotide).length - 1

  count: (nucleotide) ->
    NUCLEOTIDES = "ACGTU"

    if NUCLEOTIDES.indexOf(nucleotide) == -1
      throw new Error "Invalid Nucleotide"
    else
      @occurrencesOf(nucleotide)

  nucleotideCounts: ->
    {
      A : @count 'A'
      T : @count 'T'
      C : @count 'C'
      G : @count 'G'
    }

global.DNA = DNA