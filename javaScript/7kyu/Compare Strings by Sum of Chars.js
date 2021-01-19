function getSum(s){
    if(!/^[a-zA-Z]+$/.test(s) || s == null)return '';
    return s.split('').reduce((total, item) => {
        return total + item.toUpperCase().charCodeAt();
    }, 0);
}
function compare(s1, s2) {
    return getSum(s1) == getSum(s2);
}