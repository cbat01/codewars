// 1
String.prototype.reverse = function () {
    var res = '';
    for(let i=this.length-1;i>=0;i--){
        res += this[i];
    }
    return res;
};

// 2
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}