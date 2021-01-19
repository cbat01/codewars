// 1
function tidyNumber(n){
    return String(n).split('').sort().join('') == String(n);
}

// 2
function tidyNumber(n){
    return [...n+=""].sort().join``==n
}