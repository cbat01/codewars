function DNAStrand(dns) {
  const obj = {'A': 'T','T': 'A','C': 'G','G': 'C'}
  return dns.split('').map(n => obj[n]).join('')
}
function DNAStrand(dns) {
  const obj = {'A': 'T','T': 'A','C': 'G','G': 'C'}
  return dns.replace(/./g, n => obj[n])
}

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}