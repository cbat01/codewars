function getCount(words) {
    var res = {}
    res.vowels = typeof words == 'string' ? (words.match(/[aeiou]/gi) || []).length : 0;
    res.consonants = typeof words == 'string' ? (words.match(/[bcdfghjklmnpqrstvwxys]/gi) || []).length : 0;
    return res;
}