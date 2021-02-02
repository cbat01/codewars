// 1
const FilterNumbers = str => str.replace(/\d/g,'')

// 2
var FilterNumbers = function(str) {
    return str.split('').filter(c => isNaN(c)).join('')
}

// 3
var FilterNumbers = function(str) {
    return str.split('').filter(c => !parseInt(c)).join('').replace(/0/g,'');
}