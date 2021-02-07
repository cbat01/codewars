// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
    return str2.split('').every(x => str1.split(x).length >= str2.split(x).length)
}