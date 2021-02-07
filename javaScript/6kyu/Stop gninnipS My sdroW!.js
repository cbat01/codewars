// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(s){
    return s.split(' ').map(x => x.length>4 ? x.split('').reverse().join('') : x).join(' ');
}