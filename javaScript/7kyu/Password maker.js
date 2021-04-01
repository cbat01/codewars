// https://www.codewars.com/kata/5637b03c6be7e01d99000046
function makePassword(phrase) {
  return phrase
    .split(' ')
    .map(i => i[0])
    .join('')
    .replace(/i/ig,1)
    .replace(/o/ig,0)
    .replace(/s/ig,5);
}