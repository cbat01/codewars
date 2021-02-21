// https://www.codewars.com/kata/56b8903933dbe5831e000c76

// 1
function spoonerize(words) {
    let arr = words.split(' ');
    return arr[1].slice(0,1) + arr[0].slice(1) + ' ' + arr[0].slice(0,1) + arr[1].slice(1);
}

// 2
const spoonerize = words => words.replace(/^(.)(.* )(.)(.*)$/, '$3$2$1$4');