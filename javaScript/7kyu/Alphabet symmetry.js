// solution 1
function solve(arr){
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var result = []
    var a = 0
    for(let j of arr){
        j.split('').map((n, i) => {
            if(n.toLowerCase() == str[i]){
                a++;
            }
        })
      result.push(a);
      a = 0;
    }
    return result;
}

// solution 2
function solve(arr){
    var alphabeth = "abcdefghijklmnopqrstuvwxyz";
    return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
}