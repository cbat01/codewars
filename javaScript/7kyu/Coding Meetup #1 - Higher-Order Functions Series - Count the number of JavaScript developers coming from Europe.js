// 1
function countDevelopers(list) {
    return list.reduce(function(total,item) {
        return (item.continent == 'Europe' && item.language == 'JavaScript') ? total+1 : total;
    },0)
}

// 2
function countDevelopers(list) {
    return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length;
}