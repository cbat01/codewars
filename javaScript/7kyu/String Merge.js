// https://www.codewars.com/kata/597bb84522bc93b71e00007e

// 1
function stringMerge(string1, string2, letter){
    return string1.slice(0,string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}

// 2
const stringMerge = (s1,s2,l) => s1.slice(0, s1.indexOf(l)) + s2.slice(s2.indexOf(l));