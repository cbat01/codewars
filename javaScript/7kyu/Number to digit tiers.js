// https://www.codewars.com/kata/586bca7fa44cfc833e00005c

// 1
function createArrayOfTiers(num) {
    var prev = ''
    return [...num+''].map(x => prev += x)
}

// 2
function createArrayOfTiers(num) {
    var arr = [];
    for(let i=0;i<String(num).length;i++){
        arr.push(String(num).slice(0,i+1));
    }
    return arr;
}