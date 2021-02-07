// https://www.codewars.com/kata/517abf86da9663f1d2000003

// 1
function toCamelCase(str){
    return (str.match(/[a-z]+/gi)||[]).map((x,i) => {
        return i == 0 ? x : x[0].toUpperCase() + x.slice(1)
    }).join('');
}


// 2
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

// 3
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}