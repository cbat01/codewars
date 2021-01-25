// 1
function greetDevelopers(list) {
    list.map(x => x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
    return list;
}

// 1.1
function greetDevelopers(list) {
    return list.map(x => {
        x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`
        return x;
    })
}

// 2
const greetDevelopers = list => list.map(
    dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
);