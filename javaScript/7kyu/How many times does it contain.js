// 1
function stringCounter(inputS, charS){
  return (inputS.match(new RegExp('[' + charS + ']','g'))||[]).length;
}

// 2
function stringCounter(inputS, charS){
  return inputS.split("").filter(x => {return x === charS}).length;
}