// 题解一：
function shortcut(string){
    return string.split('').map(n => 'aeiou'.includes(n) ? n = '' : n).join('')
}

// 题解二：
function shortcut(string){
    return string.replace(/[aeiou]/gi,'')
}