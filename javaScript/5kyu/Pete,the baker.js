// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
    let arr = [];
    if(Object.keys(recipe).length > Object.keys(available).length) return 0;
    for(var key in recipe) {
        arr.push(Math.floor(available[key]/recipe[key]))
    }
    return arr.sort((a,b) => a - b)[0];
}