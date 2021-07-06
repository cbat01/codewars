// https://www.codewars.com/kata/53368a47e38700bd8300030d/
// 1
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}

// 2
function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

// 3
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

// 4
function list(names){
  if(names.length === 0) return '';
  if(names.length === 1) return names[0].name;
  let str1 = names.map(item => item.name).join(', ');
  let i = str1.lastIndexOf(', ');
  return str1.slice(0, i) + ' &' + str1.slice(i+1, );
}