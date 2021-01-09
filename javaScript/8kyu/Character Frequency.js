function charFreq(message) {
    return message.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {})
}