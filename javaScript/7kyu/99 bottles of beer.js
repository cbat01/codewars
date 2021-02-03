var sing = function () {
  let arr = []
  for(let i=99;i>0;i--){
      arr.push(`${i} ${i > 1 ? 'bottles' : 'bottle'} of beer on the wall, ${i} ${i > 1 ? 'bottles' : 'bottle'} of beer.`);
      arr.push(`Take one down and pass it around, ${i > 1 ? i-1 : 'no more'} ${i-1 == 1 ? 'bottle' : 'bottles'} of beer on the wall.`)
  }
  arr.push('No more bottles of beer on the wall, no more bottles of beer.')
  arr.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
  return arr;
};