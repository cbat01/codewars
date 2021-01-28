// 1
function flipNumber(n){
    //Code goes here!
    var res = ''
    var nLength = n.length;
    for(let i=0;i<nLength;i++){
        if(i%2 == 0){
            res += n.slice(-1)
            n = n.slice(0,-1)
        }else{
            res += n.slice(0,1)
            n = n.slice(1)
        }
    }
    return res;
}

// 2
function flipNumber (string) {
    let out = [];
    let chars = string.split("");

    while (chars.length) {
        out.push(chars.reverse().shift());
    }

    return out.join("");
}