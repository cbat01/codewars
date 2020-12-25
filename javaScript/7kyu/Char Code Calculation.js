// 题解一：
function calc(x){
    var xA = ''
    for(let i=0;i<x.length;i++){
        xA += x.substr(i,1).charCodeAt()
    }
    return (xA.match(/7/g) || []).length * 6;
}

// 题解二：
// 通过正则匹配每个字符去转成ASCII
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6