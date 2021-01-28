function scrabbleScore(str){
    return str.replace(/\s+/g,'').split('').reduce((sum, i) => sum + $dict[i.toUpperCase()],0);
}