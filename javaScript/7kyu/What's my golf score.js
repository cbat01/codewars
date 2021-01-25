// 1
function golfScoreCalculator(parList, scoreList){
    var result = 0
    parList.split('').map((x,i) => {
        result += scoreList[i] - x;
    })
    return result;
}

// 2
function golfScoreCalculator(parList, scoreList){
    return [...scoreList].reduce((total,value,index) => total + +value - parList[index], 0)
}