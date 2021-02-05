// https://www.codewars.com/kata/585a36b445376cbc22000072

// >>> message = "The supplier's phone number is (555) 867-5309"
// >>> area_code(message)
// '555'

// 1
function areaCode(text){
    return text.slice(text.indexOf('(')+1,text.indexOf(')'))
}

// 2
function areaCode(text) {
  return text.split(' ').filter(x => x.match(/\(/)).pop().slice(1,-1)
}

// 3
function areaCode(text) {
    return text.match(/\((\d{3})\)/)[1];
}