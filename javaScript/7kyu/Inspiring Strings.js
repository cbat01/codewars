// 1
function longestWord(stringOfWords){
    var length = 0;
    var result = '';
    stringOfWords.split(' ').map((x,i) => {
        if(x.length >= length){
            length = x.length;
            result = x;
        }
    })
    return result;
}

// 2
function longestWord(stringOfWords){
    return stringOfWords.split(' ').sort((a,b) => a.length - b.length).pop();
}

// 3
let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);