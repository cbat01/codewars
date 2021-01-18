// solution 1
function hasUniqueChars(str){
    return [...new Set(str.split(''))].length == str.length;
}

// solution 2
function hasUniqueChars(str){
    return str.split('').every(function(v, i, arr){
      return arr.indexOf(v) == i;
    });
}

// solution 3
let hasUniqueChars = (str) => new Set(str).size === str.length;

// solution 4
function hasUniqueChars(str) {
    return !/(.).*\1/.test(str);
}