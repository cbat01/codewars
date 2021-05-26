const flip=(d, a)=>{
    let res = a.sort((x, y) => x - y);
    return d === 'R' ? res : res.reverse();
}