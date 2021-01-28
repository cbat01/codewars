function validateEAN(eanCode) {
    //Your code
    var sum = eanCode.slice(0,-1).split('').reduce((sum, val, i) => {
        i%2 == 0 ? sum += +val : sum += +val*3
    },0)
    console.log(sum)
    return 10 - (sum%10) == +eanCode.slice(-1)
}