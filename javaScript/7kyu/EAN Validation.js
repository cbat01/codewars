// 1
function validateEAN(eanCode) {
    var sum = eanCode.slice(0,-1).split('').reduce((sum, val, i) => {return i%2 == 0 ? sum += +val : sum += +val*3},0)
    return (10 - (sum%10))%10 == eanCode.slice(-1)
}

// 2
function validateEAN(code) {
    for (var sum = 0, i = 0; i < 12; i++) {
      sum += code[i] * ((i & 1) ? 3 : 1)
    }
    
    return (10 - (sum % 10)) % 10 === +code[12]
}