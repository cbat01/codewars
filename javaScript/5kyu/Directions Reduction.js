// https://www.codewars.com/kata/550f22f4d758534c1100025a
// 1
function dirReduc(arr){
    let d1 = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    let d2 = ['SOUTH', 'NORTH', 'WEST', 'EAST'];
    for(let i = 0;i < arr.length;i++) {
        if(arr[i+1] == d2[d1.indexOf(arr[i])]){
            arr.splice(i, 2)
            dirReduc(arr)
        }
    }
    return arr;
}