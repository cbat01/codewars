// 方法一
const Calculator = function() {
    this.evaluate = string => {
        // do code here
        var arr = string.split(' ');
        // 先进行乘除
        for(let i=0;i<arr.length;i++){
            if(arr[i] === '*'){
                arr[i+1] = arr[i-1] * arr[i+1]
                arr.splice(i-1,2)
                i=i-2;
            }else if(arr[i] === '/'){
                arr[i+1] = arr[i-1] / arr[i+1]
                arr.splice(i-1,2)
                i=i-2;
            }
        }
        // 再进行加减
        for(let i=0;i<arr.length;i++){
            if(arr[i] === '+'){
                arr[i+1] = parseFloat(arr[i-1]) + parseFloat(arr[i+1])
                arr.splice(i-1,2)
                i=i-2;
            }else if(arr[i] === '-'){
                arr[i+1] = arr[i-1] - arr[i+1]
                arr.splice(i-1,2)
                i=i-2;
            }
        }
        return arr.join("");
    }
};

// 方法二
const Calculator = function() {
    this.operation = (a, b, operator) => {
      switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
      }
    }
  
    this.evaluate = (str) => {
        const args = str.split(' ');
        ['/', '*', '-', '+'].forEach((op) => {
            while ((i = args.indexOf(op)) !== -1) {
                args[i - 1] = this.operation(+args[i - 1], +args[i + 1], op);
                args.splice(i, 2);
            }
        })
        return +args[0];
    }
};