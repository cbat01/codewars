function switcher(x){
    var list = ' zyxwvutsrqponmlkjihgfedcba!? ';
    return x.map(n => list[n]).join('');
}