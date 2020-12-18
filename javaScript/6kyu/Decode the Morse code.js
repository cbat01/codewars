decodeMorse = function(morseCode){
    var result = ''
    var wordsArr = morseCode.replace(/^\s+|\s+$/g, '').split('   ') // 先去除首尾空格，再将拆开成单个单词（密文）
    for(let i = 0;i<wordsArr.length;i++) {
      var mLettersArr = wordsArr[i].split(' ')           // 将每个单词字母（密文）拆开
      for(let j of mLettersArr){                    
        result += MORSE_CODE[j]                          // 将每个密文转为字母，并拼接成单词
      }
      if(i < wordsArr.length - 1){                       // 不是最后一个单词，补空格
        result += ' '
      }
    }
    return result;
  }