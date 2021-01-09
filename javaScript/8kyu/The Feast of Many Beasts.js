// 解法一：
function feast(beast, dish) {
  return beast.slice(0,1) == dish.slice(0,1) && beast.slice(-1) == dish.slice(-1)
}

// 解法二：
function feast(beast, dish) {
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}