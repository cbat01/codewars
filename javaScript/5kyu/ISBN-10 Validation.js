// 方法一：通过for循环遍历求和实现
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

// 方法二：通过 split() 将字符串转换成数组，再使用 reduce() 方法累加求和
const validISBN10 = isbn => isbn.length == 10 && isbn.split("").reduce((a, b, i) => a + (((b == "X") && (i == 9)) ? 10 : b) * (i + 1), 0) % 11 == 0;
