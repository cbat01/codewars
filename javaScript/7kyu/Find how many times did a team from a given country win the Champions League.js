// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9

// 1
function countWins(winnerList, country) {
    return winnerList.reduce((total,item)=>{
        return (item.country === country) ? total+1 : total;
    },0)
}

// 2
function countWins(winnerList, country) {
    return winnerList.filter(i => i.country === country).length;
}