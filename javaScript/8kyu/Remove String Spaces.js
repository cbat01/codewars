// 题解一：
function noSpace(x){
    return x.replace(/\s/g, '');
}

// 题解二：
function noSpace(x){
    return x.split(' '),join('');
}