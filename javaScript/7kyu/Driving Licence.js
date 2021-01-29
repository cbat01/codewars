// 1
function driver(data) {
    list = {
        'Jan':'01','Feb':'02','Mar':'03','Apr':'04','May':'05','Jun':'06','Jul':'07','Aug':'08','Sep':'09','Oct':'10','Nov':'11','Dec':'12'
    }
    var str15 = (data[2].toUpperCase()+'99999').slice(0,5)
    var str6 = data[3].split('-')[2].slice(-2,-1)
    var str78 = data[4] === 'M' ? list[data[3].split('-')[1].slice(0,3)] : +list[data[3].split('-')[1].slice(0,3)] + 50
    var str910 = data[3].split('-')[0]
    var str11 = data[3].split('-')[2].slice(-1)
    var str1213 = data[0][0] + (data[1] ? data[1][0] : '9')
    var str1416 = '9AA'
    return str15 + str6 + str78 + str910 + str11 + str1213 + str1416;
}

// 2
function driver(data) {
    var name = (data[2].slice(0,5).toUpperCase() +'99999').slice(0,5);    // 5
    var dob = new Date(data[3]);
    var dec = (dob.getYear().toString().length==2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1]);  // 1
    var month = (data[4] == "M" ? ("0" + (dob.getMonth()+1).toString()).slice(-2) : dob.getMonth()+51);
    var day = ("0" + dob.getDate().toString()).slice(-2);
    var yearDig = dob.getYear().toString().slice(-1);
    var inits = data[0][0] + (data[1]=="" ? "9" : data[1][0])
    var arb1 = "9"
    var arb2 = "AA"
    return name + dec + month + day + yearDig + inits + arb1 + arb2
}