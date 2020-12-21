// 方法一：将值不为0的压到新数组，再计算0的个数补0
var moveZeros = function (arr) {
    // TODO: Program me
    var newArr = [];
    // 将值不为0的压到新数组，再补0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== 0){
            newArr.push(arr[i])
        }
    }
    zeroLength = arr.length - newArr.length;
    for(let j=0;j<zeroLength;j++) newArr.push(0)
    return newArr;
}

// 方法二：filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
//        concat() 方法用于连接两个或多个数组。
var moveZeros2 = function (arr) {
    return arr.filter((val)=>{return val!==0}).concat(arr.filter((val)=>{return val === 0}))
}