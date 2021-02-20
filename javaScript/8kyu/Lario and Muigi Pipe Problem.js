// https://www.codewars.com/kata/56b29582461215098d00000f

function pipeFix(numbers) {
    var res = [];
    for (let i = numbers[0]; i <= numbers.slice(-1); i++) {
        res.push(i);
    }
    return res;
}