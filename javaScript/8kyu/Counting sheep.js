// https://www.codewars.com/kata/54edbc7200b811e956000556

// 1
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((total,item) => {
        return total + (item == true ? 1 : 0)
    },0)
}

// 2
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}