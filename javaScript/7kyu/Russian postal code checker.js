// 1
function zipvalidate(postcode){
    return /^[12346]\d{5}$/.test(postcode)
}

// 2
function zipvalidate(postcode){
    return postcode.length == 6 && '12346'.indexOf(postcode[0]) > -1 && /^\d+$/.test(postcode) === true
}