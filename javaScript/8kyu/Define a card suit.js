// 解法一：
function defineSuit(card) {
    return {'♣':'clubs','♦':'diamonds','♥':'hearts','♠':'spades'}[card.slice(-1)]
}

// 解法二：
function defineSuit(card) {
  switch (card.slice(-1)){
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';    
  }
}