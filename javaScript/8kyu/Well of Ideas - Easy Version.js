// 解法一：
function well(x){
    sum = x.filter(n => n == 'good').length;
    return sum > 0 ? (sum > 2 ? 'I smell a series!' : 'Publish!') : 'Fail!';
}

// 解法二：
function well(x){
    sum = 0
    x.map(n => n == 'good' ? sum++ : sum)
    return sum > 0 ? (sum > 2 ? 'I smell a series!' : 'Publish!') : 'Fail!';
}