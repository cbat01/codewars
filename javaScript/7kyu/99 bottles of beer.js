var sing = function () {
    // return the lyrics as a string ...
    let arr = []
    for(let i=99;i>0;i--){
      arr.push(`${i > 0 ? i : 'No more'} bottles of beer on the wall, ${i > 0 ? i : 'no more'} bottles of beer.`);
      arr.push(`Take one down and pass it around, ${i > 0 ? i-1 : 99} bottles of beer on the wall.`)
    }
    console.log(arr[199])
    return arr;
};