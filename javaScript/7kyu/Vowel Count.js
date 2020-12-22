// 题解一：
function getCount(str) {
    var vowelsCount = 0;

    // enter your majic here
    var arr = str.split('');
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u')
        vowelsCount++;
    }
    return vowelsCount;
}

// 题解二：(Best Practices)
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}