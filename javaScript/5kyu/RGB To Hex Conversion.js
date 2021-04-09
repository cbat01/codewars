// https://www.codewars.com/kata/513e08acc600c94f01000001

// 1
function rgb(r, g, b){
    return changeTo(r) +''+ changeTo(g) +""+ changeTo(b);
}
function changeTo(val){
    if(val >= 255){
        return 'FF';
    }else if(val <= 0) {
        return '00';
    }else {
        let r = val.toString(16).toUpperCase()
        return r.length < 2 ? '0' + r : r;
    }
}

// 2
function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
  }
  
function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}