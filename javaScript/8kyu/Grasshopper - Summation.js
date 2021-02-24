// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// 1
var summation = function (num) {
    return Array(num).fill(0).reduce((total,val,i)=>{
      return total+i+1;
    },0)
}

// 2
const summation = n => n * (n + 1) / 2;