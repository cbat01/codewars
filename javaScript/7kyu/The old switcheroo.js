// 1
function vowel2index(str) {
    return str.split('').map((item, index) => {
        return /[aeiou]/i.test(item) ? index+1 : item;
    }).join('')
}

// 2
function vowel2index(str) {
    return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}