// 1
function divCon(x){
    return x.reduce((sum,x) => typeof x == 'string' ? sum -= +x : sum += x,0)
}

// 2
const divCon=x=>x.reduce((a,b)=>a+(0+b==b?b:-+b),0)

// 3
function divCon(x){
    var sum = 0;
    x.map(x => typeof x == 'string' ? sum -= +x : sum += x)
    return sum;
}

// 4
function divCon(x){
    var strSum = 0;
    var noStrSum = 0;
    x.map(x => typeof x == 'string' ? strSum += +x : noStrSum += x)
    return noStrSum - strSum;
}