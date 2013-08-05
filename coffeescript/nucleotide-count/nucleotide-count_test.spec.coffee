DNA = require('./example');

describe 'DNA', ->

  it 'should not have adenosine if empty', ->
    expect(new DNA('').count('A')).toBe 0

  it 'should not have any nucleotides if empty', ->
    expect(new DNA('').nucleotideCounts).toEqual { A: 0, T: 0, C: 0, G: 0 }

  it 'should count cytidine', ->
    expect(new DNA('CCCCC').count('C')).toBe 5

  it 'should count guanosine', ->
    expect(new DNA('GGGGGGGG').nucleotideCounts)
      .toEqual { A: 0, T: 0, C: 0, G: 8 }

  it 'can count just thymidine', ->
    expect(new DNA('GGGGGTAACCCGG').count('T')).toBe 1

  it 'should be able to count again', ->
    dna = new DNA('CGATTGGG')
    dna.count('T')
    expect(dna.count('T')).toBe 2

  it 'should not have uracil', ->
    expect(new DNA('GATTACA').count('U')).toBe 0

  it 'should not change counts after trying to count uracil', ->
    dna = new DNA('GATTACA')
    dna.count('U')
    expect(dna.nucleotideCounts).toEqual { A: 3, T: 2, C: 1, G: 1}

  it 'will not accept invalid nucleotides', ->
    expect( ->
      new DNA('GACT').count('X')
    ).toThrow new Error 'Invalid Nucleotide'

  it 'counts all nucleotides', ->
    expect(
      new DNA('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')
      .nucleotideCounts).toEqual { A: 20, T: 21, G: 17, C: 12 }