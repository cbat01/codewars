// 1
function absentVowel(x){
    for(let i in 'aeiou'){
        if(x.indexOf('aeiou'[i]) == -1){
            return +i;
        }
    }
}

// 2
function absentVowel(x){
    var vowel = 'aeiou'
    var vowelArr = [...new Set (x.match(/[aeiou]/g).sort())]
    for(let i=0;i<5;i++){
        if(vowelArr[i]!==vowel[i])return i;
    }
}
