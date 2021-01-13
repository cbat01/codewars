// solution 1
var capitals = function (word) {
    var a = [];
    word.split('').map((n,i) => {
        if(/[A-Z]/.test(n) == true){
            a.push(i)
        }
    })
    return a;
};

// solution 2
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};

// solution 3
var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
        if (c.toUpperCase() === c) result.push(i);
        return result;
    }, []);
}