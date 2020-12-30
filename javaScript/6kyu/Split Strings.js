// 解法一：
function solution(str){
    var result = [];
    for(let i=0;i<str.length;i=i+2){
        if(i == str.length-1){
            result.push((str.substr(i,1)+'_'))
        }else{
            result.push(str.substr(i,2))
        }
    }
    return result;
}

// 解法二：
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}