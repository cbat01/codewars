// 1
function validateWord(s, c = s.toLowerCase()){
    return c.length % new Set(c).size == 0;
}

// 2
function validateWord(s){
    return s.length % ([...new Set(s.toLowerCase().split(''))].length) === 0;
}