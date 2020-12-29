// 解法一：
function getMiddle(s){
    return s.length%2 ? s.substr(s.length/2,1) : s.substr(s.length/2 - 1,2)
}

// 解法二：
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}