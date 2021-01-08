// 解法一：
function whoIsPaying(name){
    //your code here
    arr = name.split(' ')
    name.length > 2 ? arr.push(name.slice(0,2)) : arr
    return arr;
}

// 解法二：
function whoIsPaying(name){
    return (name.length > 2) ? ([name,name.slice(0,2)]) : [name]
}