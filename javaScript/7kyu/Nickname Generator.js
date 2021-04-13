// https://www.codewars.com/kata/593b1909e68ff627c9000186
function nicknameGenerator(name){
    if(name.length < 4) return 'Error: Name too short';
    if('aeiou'.indexOf(name[2]) != -1) return name.slice(0, 4);
    return name.slice(0, 3);
}