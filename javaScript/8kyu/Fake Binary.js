// 方法一：for...of
function fakeBin(x){
    var result = ''
    for(let i of x) result += (parseInt(i) < 5 ? 0 : 1);
    return result;
}

// 方法二：replace()
function fakeBin(x){
    return x.replace(/\d/g, d => d < 5 ? 0 : 1)
}

// 方法三：转数组 然后用map()
function fakeBin(x){
    return x.split('').map(i => i < 5 ? 0 : 1).join('');
}