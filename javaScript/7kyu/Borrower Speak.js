// 1
function borrow(s){
    return (s.match(/[a-z]/gi) || []).join('').toLowerCase();
}

// 2
function borrow(s){
    return s.toLowerCase().replace(/\W/g,'');
}