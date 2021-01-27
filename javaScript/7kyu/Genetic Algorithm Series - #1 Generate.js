// 1
const generate = length => {
    return [...Array(length)].map(x => parseInt(Math.random()*2)).join('')
};

// 2
const generate = length => {
    return Array.from(Array(length) , x => Math.floor(Math.random() * 2)).join('');
};