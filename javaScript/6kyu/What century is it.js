// 注；题目中年份都是4位数，所以结果都是10以上
// 题解一：
function whatCentury(year){
    var r = parseInt(year/100) + 1
    if(r < 20) return r + 'th'; // 11到19都是加th,因为英语是 -teen"th"
    switch(r%10){
        // 除了11th,12th,13th,其它所有1,2,3,分别是st,nd,rd.剩下的都是th
        case 1: return r + 'st';
        case 2: return r + 'nd';
        case 3: return r + 'rd';
        default: return r + 'th';
    }
}

// 题解二：
function whatCentury(year)
{
  var century = Math.ceil(year/100); // 通过Math.ceil() 向上取整
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}