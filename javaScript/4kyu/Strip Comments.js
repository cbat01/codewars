// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

// 1
function solution(input, markers) {
    return input.split('\n').map(x => {
        for(let i=0;i<markers.length;i++){
            x = x.indexOf(markers[i]) > 0 ? x.slice(0,x.indexOf(markers[i])).trim() : x
        }
        return x;
    }).join('\n')
}

// 2
function solution(input, markers){
    return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

// 3
function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
}