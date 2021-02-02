function isFlush(cards) {
    return cards.every(x => x.slice(-1) === cards[0].slice(-1));
}