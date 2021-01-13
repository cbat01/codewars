// solution 1
function spam(number){
    return "hue".repeat(number);
}

// solution 2
function spam(number){
  return Array(++number).join("hue");
}