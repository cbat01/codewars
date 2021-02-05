// https://www.codewars.com/kata/5715eaedb436cf5606000381


function positiveSum(arr) {
  return arr.reduce((sum,i) => i>0 ? sum+i : sum,0)
}