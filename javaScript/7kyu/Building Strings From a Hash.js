// solution 1
function solution(pairs){
  var result = ''
  for(let i in pairs){
    result += i + ' = ' + pairs[i] + ','
  }
  return result.slice(0,-1);
}

// solution 2
function solution(pairs){
  return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}