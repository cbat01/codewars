// solution 1
function getProductId(url){
    return url.split('-').reverse()[1]
}

// solution 2
function getProductId(url){
    return url.split('-').slice(-2,-1)[0]
}

// solution 3
function getProductId(url){
    var result;
    url.split('-').map((n,i) => {
        if(n == 'p'){
            result =  url.split('-')[i+1];
        }
    })
    return result;
}