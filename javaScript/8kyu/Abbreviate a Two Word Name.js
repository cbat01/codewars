// 题解一：
function abbrevName(name){
    return name.split(' ').map(n => n.slice(0,1).toUpperCase()).join('.');
}

// 题解二：
function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}