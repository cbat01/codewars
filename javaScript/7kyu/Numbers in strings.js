// 1
function solve(s){
    return parseInt(s.replace(/[^0-9]/ig," ").split(' ').sort((a,b)=>b-a)[0])
}

// 2
function solve(s){
    return Math.max(...s.match(/\d+/g));
}