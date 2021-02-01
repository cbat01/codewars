// 1
function sumFromString(str){
    return str.replace(/[^0-9]/ig,' ').split(' ').reduce((sum, x) => sum+ +x,0)
}

// 2
function sumFromString(str){
    return (str.match(/\d+/g,' ') || []).reduce((sum, x) => sum+ +x,0)
}