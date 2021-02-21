// https://www.codewars.com/kata/57cf50a7eca2603de0000090

// 1
function moveTen(s){
    return s.split('').map(x => {
        let asscii = x.charCodeAt();
        return asscii <= 112 ? String.fromCharCode(asscii+10) : String.fromCharCode(asscii-112+96);
    }).join('');
}

// 2
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}