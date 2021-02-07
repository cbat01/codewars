// codewars.com/kata/551dc350bf4e526099000ae5

// 1
function songDecoder(song){
    return song.replace(/(WUB)+/g,' ').trim();
}


// 2
function songDecoder(song){
    return song.split('WUB').filter(Boolean).join(' ');
}