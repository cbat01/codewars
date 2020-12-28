// 题解一：
function evenChars(string) {
    if(string.length < 2 || string.length > 100) return 'invalid string';
    var arr = [];
    for(let i=0;i<[...string].length;i++){  // [...string] 将字符串转成数组
        if(i%2 == 1) arr.push([...string][i]);
    }
    return arr;
}

// 题解二：
function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? 'invalid string' : [...string].filter((value,index) => index%2)
}