function countWords(str) {
  return +str == '' ? 0 : str.trim().split(/\s+/).length 
}

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}