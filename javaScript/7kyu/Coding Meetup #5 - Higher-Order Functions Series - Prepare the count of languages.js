// 1
function countLanguages(list) {
    var count = {};
    list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
    return count;
}

// 2
function countLanguages(list) {
    var obj = {}
    list.map(x => {
        obj[x.language] = (obj[x.language] == undefined ? 1 : obj[x.language]+1);
    })
    return obj;
}