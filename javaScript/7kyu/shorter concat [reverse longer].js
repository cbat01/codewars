// solution 1
function shorter_reverse_longer(a,b){
    if(a.length < b.length){
        var c = a;
        a = b;
        b = c;
    }
    return a + b.split('').reverse('').join('') + a;
}

// solution 2
function shorter_reverse_longer(a,b){
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
    a + b.split('').reverse().join('') + a;
}