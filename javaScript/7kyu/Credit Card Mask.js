// solution 1
function maskify(cc){
    return cc.slice(0,-4).replace(/./g, '#') + cc.slice(-4);
}

// solution 2
function maskify(cc){
    return cc.length < 4 ? cc : cc.split('').reverse().map((n,i) => {return i < 4 ? n : '#'}).reverse().join('')
}

// solution 3
function maskify(cc){
    return cc.replace(/.(?=....)/g, '#');
}