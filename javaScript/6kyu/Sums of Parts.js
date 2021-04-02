// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

// Best Practices
function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}

// solution 2
function partsSums(ls) {
    let arr = [];
    if(ls.length === 0) return [0];
    arr.push(ls.reduce((sum, a) => sum + a));
    for(let i = 0;i < ls.length;i++) {
        arr.push(arr[arr.length-1] - ls[i])
    }
    return arr;
}