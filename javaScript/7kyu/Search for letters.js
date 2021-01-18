function change(string){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(n => {return string.toLowerCase().indexOf(n) > -1 ? 1 : 0}).join('');
}