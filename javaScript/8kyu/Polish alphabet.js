// 解法一：
function correctPolishLetters (string) {
    // your code
    return string.split('').map(n => 'ąćęłńóśźż'.indexOf(n) > -1 ? 'acelnoszz'.substr('ąćęłńóśźż'.indexOf(n),1) : n).join('');
}

// 解法二：(Best Practices)
function correctPolishLetters (string) {
    var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}