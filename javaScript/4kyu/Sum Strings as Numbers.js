// 题解一：
function sumStrings(a,b) {
    var result = '';
    var remainder = 0;
    if(a.length < b.length) {
        var c = a;
        a = b;
        b = c;
    }
    for(let i=1;i<=a.length;i++){
        // 从最右边开始，将两个数求和，并加上上一次的余数，首次余数为0
        var sum =  (a.length-(i-1)>0 ? parseInt(a.substr(a.length-i,1)) : 0) + (b.length-(i-1)>0 ? parseInt(b.substr(b.length-i,1)) : 0)  + remainder;
        // 求和后去取余，就是该位要保留的数字
        result = sum%10 + result
        // 计算余数
        remainder = parseInt(sum/10)
        // 如果到了最左边，即a的第一位，余数还大于0，则直接加上余数
        if(remainder > 0 && i == a.length) result = remainder + result;
    }
    return result.replace(/\b(0+)/gi,""); // 去除字符串前面的0
}

// 题解二：
function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c > 9;
    }
    return res.replace(/^0+/, '');
}