// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 1
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// 2
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}