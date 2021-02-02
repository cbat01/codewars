// 1
function remove(s){
    return s.split(' ').map(x => x.replace(/!/g,' ').trimRight().replace(/ /g,'!')).join(' ');
}

// 2
function remove(s){
    return s.replace(/\b!+/g, '');  
}