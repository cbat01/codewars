function dative(word) {
    return word.match(/[aáoóuúeéiíöőüű]/g).pop().match(/[eéiíöőüű]/) ? word + 'nek' : word + 'nak'
}