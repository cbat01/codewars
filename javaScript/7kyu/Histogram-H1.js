function histogram(results) {
    var str = ''
    for(let i=6;i>0;i--){
        str += i + '|' + '#'.repeat(results[i-1]) + `${results[i-1]>0 ? ' '+results[i-1] : ''}` + '\n'
    }
    return str;
}