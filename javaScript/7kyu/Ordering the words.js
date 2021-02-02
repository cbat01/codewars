// 1
function orderWord(s){
    return s ? s.split('').sort().join('') : 'Invalid String!';
}

// 1.1
function orderWord(s){
    return s ? [...s].sort().join('') : 'Invalid String!';
}