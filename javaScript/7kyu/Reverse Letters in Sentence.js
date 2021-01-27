// reverse the letters in the sentence
function reverser(sentence) {
    return sentence.split(' ').map(x => x.split('').reverse().join('')).join(' ');
}