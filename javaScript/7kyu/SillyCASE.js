function sillycase(silly) {
    var mid = Math.ceil(silly.length/2)
    return silly.slice(0,mid).toLowerCase() + silly.slice(mid).toUpperCase();
}