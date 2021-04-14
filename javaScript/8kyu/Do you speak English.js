// 1
function spEng(s){
    return /english/i.test(s)
}

// 2
function spEng(sentence) {
    return sentence.toLowerCase().indexOf("english") != -1;
}