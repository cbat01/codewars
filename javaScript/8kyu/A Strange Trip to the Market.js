// 解法一：
function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  return s.indexOf('tree fiddy') > -1 || s.indexOf('3.50') > -1 || s.indexOf('three fifty') > -1 ? true : false;
}

// 解法二：
const isLockNessMonster = (s) => /tree fiddy|3.50|three fifty/.test(s)