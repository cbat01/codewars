// https://www.codewars.com/kata/582ba36cc1901399a70005fc
function getAverageAge(list) {
    return Math.round(list.reduce((sum, val) => {
        return sum + val.age;
    }, 0) / list.length);
}