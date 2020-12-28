// 解法一：
function divisibleByThree(str){
    return str.split('').reduce((sum,i)=> parseInt(sum)+parseInt(i)) % 3 == 0
}

// 解法二：
function divisibleByThree(str){
    return [...str].reduce((s,d)=>+d+s,0)%3===0;
}