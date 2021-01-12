// solution 1
function solution(str, ending){
    return str.endsWith(ending)
}

// solution 2
function solution(str, ending){
    return ending == '' ? true : str.slice(-(ending.length)) == ending
}