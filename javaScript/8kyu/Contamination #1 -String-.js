// 解法一：
function contamination(text, char){
  return text.replace(/./g,char)
}

// 解法二：
function contamination(text, char){
  return char.repeat(text.length)
}