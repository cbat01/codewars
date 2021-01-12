// solution 1
function isIsogram(str){
    for(let i of str.toLowerCase()){
        if(str.toLowerCase().split(i).length-1 > 1) return false;
    }
    return true;
}

// solution 2
function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
}

// solution 3
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}

// solution 4
function isIsogram(str){
    return !/(\w).*\1/i.test(str)
}