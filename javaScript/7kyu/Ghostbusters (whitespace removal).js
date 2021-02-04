// https://www.codewars.com/kata/5668e3800636a6cd6a000018/javascript

// 1
function ghostBusters(building) {
    return / /.test(building) ? building.replace(/ /g,'') : "You just wanted my autograph didn't you?";
}

// 2
function ghostBusters(building) {
    return building.replace(/ /g,'').length == building.length ? "You just wanted my autograph didn't you?" : building.replace(/ /g,'');
}