var makeBackronym = function(string){
    return string.split('').map(x => {return dict[x.toUpperCase()]}).join(' ')
};