// 1
function timeCorrect(str) {
    const date = new Date(); 
    if (str == '') return str;
    if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
    date.setUTCHours(...str.split(':'));
    return date.toLocaleTimeString('en', {hour12: false});
}

// 2
function timeCorrect(timestring) {
    if(timestring === '') return '';
    var format = /([0-9][0-9]):([0-9][0-9]):([0-9][0-9])/.test(timestring)
    if(!format){
      return null;
    }else{
        var seconds = ('0' + timestring.slice(-2)%60).slice(-2);
        var minutes = '';
        var hours = '';
        if(timestring.slice(-2) >= 60){
            minutes = ('0' + (timestring.slice(3,5)%60 + 1)%60 ).slice(-2);
        }else{
            minutes = ('0' + timestring.slice(3,5)%60).slice(-2);
        }
        if(timestring.slice(3,5) > 60 || (timestring.slice(3,5) == 59 && timestring.slice(-2) >= 60)){
            hours = ('0' + (timestring.slice(0,2)%24 + 1)%24 ).slice(-2);
        }else{
            hours = ('0' + timestring.slice(0,2)%24).slice(-2);
        }
        return hours +':'+ minutes + ':' + seconds;
    }
  }