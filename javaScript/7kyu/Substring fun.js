// https://www.codewars.com/kata/565b112d09c1adfdd500019c

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2

// 1
function nthChar(words){
    return words.map((x,i) => x[i]).join('');
}

// 2
function nthChar(words){
    return words.reduce((total,val,i) => total + val[i],'');
}