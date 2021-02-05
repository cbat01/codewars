// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0

// 1
function lifePathNumber(dateOfBirth) {
    return dateOfBirth.replace(/\D/g,'')%9 || 9;
}


// 2
const sumStr = s => {
    var result = String(s).split('').reduce((a,b)=>+a + +b,0)
    return String(result).length > 1 ? sumStr(result) : result;
}
function lifePathNumber(dateOfBirth) {
    return sumStr(sumStr(dateOfBirth.split('-')[0]) + sumStr(dateOfBirth.split('-')[1]) + sumStr(dateOfBirth.split('-')[2]))
}