// 1
function isRubyComing(list) {
    return list.find(x => x.language === 'Ruby') ? true : false;
}

// 2
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
}