// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

// 1
function firstNonRepeatingLetter(s) {
    let s1 = s.toLowerCase();
    for(let i=0;i<s1.length;i++){
      if(s1.split(s1[i]).length == 2){
          return s[i];
      }
    }
    return '';
}


// 2
function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
}