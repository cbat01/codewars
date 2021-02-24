function squareSum(numbers){
    return numbers.reduce((total,item) => total+item*item, 0);
}