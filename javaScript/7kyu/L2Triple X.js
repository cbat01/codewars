// 1
function tripleX(str){
  return str.substr(str.indexOf('x'),3) === 'xxx';
}

// 2
const tripleX = str => /^[^x]*xxx/.test(str);