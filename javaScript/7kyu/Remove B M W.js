function removeBMW(str){
    return typeof str == 'string' ? str.replace(/[bmw]/gi,'') : 'This program only works for text.';
}