// 1
function insertDash(num) {
    var arr = String(num).split('')
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 == 1 && arr[i+1]%2 == 1){
            arr.splice(i+1,0,'-');
            i++;
        } 
    }
    return arr.join('');
}

// 2
function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}