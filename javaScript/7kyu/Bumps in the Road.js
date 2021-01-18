// solution 1
function bump(x){
    return x.split('').filter(x => x == 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

// solution 2
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!";

// solution 3
function bump(x){
    return x.match(new RegExp("n", "g")).length > 15 ? "Car Dead" : "Woohoo!";
}