// https://www.codewars.com/kata/5552101f47fc5178b1000050

function digPow(n, p) {
    var sum = String(n).split('').reduce((total,item,index) => {
        return total + Math.pow(item,index+p)
    },0)
    return sum%n === 0 ? sum/n : -1;
}