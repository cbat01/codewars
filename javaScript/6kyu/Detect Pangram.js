// 题解一：
function isPangram(string){
    for(let i = 65; i <= 90; i++){
        if(string.toUpperCase().indexOf(String.fromCharCode(i)) == -1){
            return false;
        }
    }
    return true;
}

// 题解二：(Best Practices)
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}