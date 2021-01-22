// 1
function solve(s){
    return s.split(/[^aeiou]/).sort((a,b) => b.length - a.length)[0].length;
}

// 2
const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

// 3
function solve(s){
    return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}