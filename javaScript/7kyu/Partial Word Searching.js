// 1
function wordSearch(query, seq){
    var result = seq.filter((item) => {
        return item.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    return result.length == 0 ? ["Empty"] : result;
}

// 2
function wordSearch(query, seq){
    var reg = new RegExp(query,"i");
    var res = seq.filter(function(val){
      return reg.test(val);
    });
    return (res.length > 0) ? res : ["Empty"];
}