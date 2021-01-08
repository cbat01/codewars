// 解法一：
function isVow(a){
    var arr = [97,101,105,111,117]
    return a.map(n => arr.indexOf(n) >= 0 ? n = String.fromCharCode(n) : n)
}

// 解法二：
function isVow(a){
    return a.map(n => 'aeiou'.includes(String.fromCharCode(n)) ? n = String.fromCharCode(n) : n)
}