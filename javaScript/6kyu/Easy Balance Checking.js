function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
    console.log(book.replace(/[^0-9|.|a-zA-Z\n ]/g,'').split('\n'))
    return `Original Balance: `
}