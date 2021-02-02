// 1
function flyBy(lamps, drone){
    return [...lamps].fill('o',0,drone.length).join('')
}

// 2
function flyBy(lamps, drone){
    return [...lamps].map((x, i) => i < drone.length ? 'o' : x).join('')
}