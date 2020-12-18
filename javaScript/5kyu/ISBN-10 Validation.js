function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    var sum = 0;
    if(isbn.length !== 10) return false;
    for(let i = 0;i<isbn.length;i++){
      if(i == 9 && isbn.substr(i,1) == 'X'){
        sum += 100;
      }else{
        sum += isbn.substr(i,1) * (i+1)
      }
    }
    if(sum % 11 == 0) return true;
    return false;
}