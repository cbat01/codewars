function permutations(string) {
  var result = [];
  if (string.length <= 1) {
  return [string];
  } else {
  for (var i = 0; i < string.length; i++) {
      var c = string[i];
      var newStr = string.slice(0, i) + string.slice(i + 1, string.length);
      var l = permutations(newStr);
      
      for (var j = 0; j < l.length; j++) {
        var tmp = c + l[j];
        if (result.indexOf(tmp) < 0){
            result.push(tmp);
        }
      }
  }
  }
  return result;
}