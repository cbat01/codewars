function lowercaseCount(str){
  return (str.match(/[a-z]/g)|| []).length
}

function lowercaseCount(str){
  return str.replace(/[^a-z]/g, "").length;
}