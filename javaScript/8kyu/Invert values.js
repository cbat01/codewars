// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
   return array.map(n => n === 0 ? n : -n);
}