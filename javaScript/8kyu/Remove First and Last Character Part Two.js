function array(arr){
  return arr.split(',').length < 3 ? null : arr.split(',').slice(1,-1).join(' ')
}

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}