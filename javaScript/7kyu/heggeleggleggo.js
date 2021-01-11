function heggeleggleggo(word){
    return word.split('').map(n => /[aeiouAEIOU ]/.test(n) ? n : n + 'egg').join('')
}

/* 1. since input string has only alphabets and spaces,
   any character which is not a vowel or a space would be a consonant
   we check this by `[^aeiou ]`; we then capture this by ([^aeiou ])
   2. `gi` flag introduces a global, case-insensitive check
   3. $1 in the replacement string refers to consonant we had captured before
   for more, refer: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */
let heggeleggleggo = w => w.replace(/([^aeiou ])/gi, "$1egg");