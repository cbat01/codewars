// 1
function switcheroo(x){
    return x.replace(/b/g,'x').replace(/a/g,'b').replace(/x/g,'a')
}

// 2
const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")