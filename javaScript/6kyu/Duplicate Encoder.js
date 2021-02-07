// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// 1
function duplicateEncode(word){
    word = word.toLowerCase();
    return word.split('').map(x => word.split(x).length > 2 ? ')' : '(').join('');
}

// 2
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}