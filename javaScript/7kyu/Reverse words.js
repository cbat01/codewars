// solution 1
function reverseWords(str) {
    return str.split(' ').map(n => n.split('').reverse().join('')).join(' ');
}

// solution 2
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}