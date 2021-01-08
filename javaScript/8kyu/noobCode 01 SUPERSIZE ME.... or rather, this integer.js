// 题解一：
function superSize(num){
    return parseInt(num.toString().split('').sort((a,b)=> b - a).join(''));
}

// 题解二：
function superSize(n){
    return parseInt(n.toString().split('').sort().reverse().join(''))
}