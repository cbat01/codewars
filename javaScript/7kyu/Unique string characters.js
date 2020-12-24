// 题解一：
function solve(a,b){
    var result = '';
    for(let i=0;i<a.length;i++){
        if(b.indexOf(a[i]) == -1){
            result = result + a[i]
        }
    }
    for(let i=0;i<b.length;i++){
        if(a.indexOf(b[i]) == -1){
            result = result + b[i]
        }
    }
    return result;
}

// 题解二：
function solve(a,b){
    var result = '';
    for(let i=0;i<a.length;i++){
        if(!(b.includes(a[i]))) result += a[i]
    }
    for(let i=0;i<b.length;i++){
        if(!(a.includes(b[i]))) result += b[i]
    }
    return result;
}

// 题解三： (Best Practices)
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
function solve(a,b) {
    let setA = new Set(a);
    let setB = new Set(b);
    return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
};

// 题解四：
// 通过将两个字符串合并，再用filter去过滤
function solve(a,b){
    return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};