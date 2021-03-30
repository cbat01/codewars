// https://www.codewars.com/kata/581f4ac139dc423f04000b99
function transposeTwoStrings(arr){
    let len = arr[0].length - arr[1].length
    if(len > 0) {
        arr[1] = arr[1] + ' '.repeat(len)
    } else {
        arr[0] = arr[0] + ' '.repeat(Math.abs(len))
    }
    var res = '';
    arr[0].split('').forEach((x, i) => res += x + ' ' + arr[1][i] + '-')
    return res.split('-').join('\n').slice(0,-1);
}