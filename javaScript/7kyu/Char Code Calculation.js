// 题解一：
// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。返回匹配结果的数组。
function calc(x){
    var xA = ''
    for(let i=0;i<x.length;i++){
        xA += x.substr(i,1).charCodeAt()
    }
    return (xA.match(/7/g) || []).length * 6;
}

// 题解二：
// 通过replace()正则匹配每个字符去转成ASCII
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6