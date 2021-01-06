// Solution 1:
function sumMix(x){
    return x.reduce((s,a) => s + +a, 0);
}

// Solution 2:
function sumMix(x){
    var sum = 0;
    x.map(n => sum += parseInt(n));
    return sum;
}

// Solution 3:
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}