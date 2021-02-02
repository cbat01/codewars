function gap(num) {
    return num.toString(2).split('1').slice(0,-1).sort().pop().length;
}