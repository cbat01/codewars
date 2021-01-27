// 1
function last(x){
    return x.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)))
}

// 2
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}