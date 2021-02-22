// https://www.codewars.com/kata/57d1f36705c186d018000813

function gordon(a){
    return a.replace(/[a|A]/g,'@').replace(/[eiou]/g,'*').split(' ').map(x => x.toUpperCase()+'!!!!').join(' ');
}