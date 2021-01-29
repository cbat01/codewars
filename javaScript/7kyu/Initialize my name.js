// 1
function initializeNames(name){
    return name.split(' ').map((x,i) => (i==0||i==name.split(' ').length-1) ? x : x.slice(0,1).toUpperCase()+'.').join(' ')
}

// 2
const initializeNames = name => name.replace(/ (\w)\w*(?= )/g, ' $1.')