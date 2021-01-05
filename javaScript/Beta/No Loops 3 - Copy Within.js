// 解法一：
function copy(array, start, stop, place){
    return array.copyWithin(place,start,stop);
};

// 解法二：
function copy(array, start, stop, place){
    array.slice(start,stop).map((n,i) => {
        array.splice((place+i),1,n)
    })
    return array;
};