// 1
function sortMyString(S){
    var a = '';
    var b = '';
    for(let i=0;i<S.length;i++){
        i%2 === 0 ? a+=S[i] : b+=S[i];
    }
    return a + ' ' + b;
}

// 2
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}