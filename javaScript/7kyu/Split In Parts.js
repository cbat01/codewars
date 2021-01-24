// 1
var splitInParts = function(s, partLength){
  return s.split('').map((x,i) => ((i+1)%partLength === 0) ? x + ' ' : x).join('').trim()
}

// 2
const splitInParts = (s, partLength) => 
  s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');