// 1
String.prototype.repeat = function(count) {
    // Go for it
    var result = '';
    for(let i = 0;i<count;i++){
        result += this;
    }
    return result;
};

// 2
String.prototype.repeat = function(count) {
    return new Array(count + 1).join(this);
};

// 3
String.prototype.repeat = function(count) {
    return [...Array(count)].fill(this).join(``);
};