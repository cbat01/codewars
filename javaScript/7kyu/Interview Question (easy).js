function getStrings(city){
    return [...new Set(city.replace(/\s*/g,"").toLowerCase().split(''))].map(x => x + ':' + '*'.repeat(city.toLowerCase().split(x).length-1)).join(',')
}