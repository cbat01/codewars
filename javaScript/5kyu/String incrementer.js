// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// 1
function incrementString (str) {
    let s = (str.match(/\D+/) || '')
    let n = str.replace(/\D+/,'')
    let nLength = n.length || 0
    n = (parseInt(n)||0) + 1
    let zeroNum = nLength - String(n).length
    zeroNum <= 0 ? n : n = '0'.repeat(zeroNum) + n;
    return s+n;
}

// 2
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)