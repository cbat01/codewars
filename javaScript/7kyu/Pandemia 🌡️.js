// 1
function infected(s) {
    let uninfected = 0;
    let infected = 0;
    s.split('X').forEach(x => {
        if(x !== ''){
            x.indexOf(1) > -1 ? infected += x.length : uninfected += x.length;
        }
    })
    if(infected == 0) return 0;
    return infected/(infected+uninfected) * 100;
}

// 2
function infected(s) {
    return 100 * (s.split('X').filter((c,i)=>c.indexOf(1) > -1).join('').length / s.split('X').join('').length) || 0
}