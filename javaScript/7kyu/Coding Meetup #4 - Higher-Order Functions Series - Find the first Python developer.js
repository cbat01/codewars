// 1
function getFirstPython(list) {
    for(let i=0;i<list.length;i++){
        if(list[i].language == 'Python'){
            return `${list[i].firstName}, ${list[i].country}`
        }
    }
    return 'There will be no Python developers'
}

// 2
function getFirstPython(list) {
    var res = list.find(x => x.language === 'Python')
    return res ? `${res.firstName}, ${res.country}` : 'There will be no Python developers';
}