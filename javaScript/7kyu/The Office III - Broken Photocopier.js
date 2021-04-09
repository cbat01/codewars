// https://www.codewars.com/kata/57ed56657b45ef922300002b
function broken(x){
    return x.split('').map(x => x == '0' ? '1' : '0').join('');
}