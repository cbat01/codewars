// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// 1
function duplicateCount(text){
    let obj = {};
    text = text.toLowerCase()
    for(let i=0;i<text.length;i++){
        if(text.split(text[i]).length > 2){
          obj[text[i]] = 0
        }
    }
    return Object.keys(obj).length;
}

// 2
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}