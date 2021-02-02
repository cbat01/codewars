function dbSort(a){
    let num = a.filter(x => typeof x === 'number').sort((a,b) => a-b)
    let string = a.filter(x => typeof x === 'string').sort()
    return num.concat(string)
}