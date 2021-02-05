// https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

// scrollingText("codewars") should return:
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text){
    let arr = [];
    for(let i=0;i<text.length;i++){
        arr.push(text.repeat(2).toUpperCase().substr(i,text.length))
    }
    return arr;
}