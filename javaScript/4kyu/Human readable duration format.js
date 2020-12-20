function formatDuration (seconds) {
  var result = ''

  // seconds
  if(seconds == 0) return 'now'
  if(seconds == 1) return '1 second'

  var second = seconds%60;
  if(second > 1){
    result += second + ' seconds'
  }else if(second == 1){
    result += '1 second'
  }

  // minute
  var minute = parseInt(seconds%3600/60)
  if(minute == 1){
    if(seconds%60 == 0){
      result = '1 minute'
    }else{
      result = '1 minute and ' + result
    }
  }else if(minute > 1){
    if(seconds%60 == 0){
      result = minute + ' minutes'
    }else{
      result = minute + ' minutes and ' + result
    }
  }

  // hour
  var hour = parseInt(seconds%(3600*24)/3600)
  if(hour == 1){
    if(seconds%3600 == 0){
      result = '1 hour'
    }else{
      if(second > 0 && minute > 0){
        result = '1 hour, ' + result
      }else
      result = '1 hour and ' + result
    }
  }else if(hour > 1){
    if(seconds%3600 == 0){
      result = hour + ' hours'
    }else{
      if(second > 0 && minute > 0){
        result = hour + ' hours, ' + result
      }else{
        result = hour + ' hours and ' + result
      }
    }
  }

  // day
  var day = parseInt(seconds%(3600*24*365)/(3600*24))
  if(day == 1){
    if(seconds%(3600*24) == 0){
      result = '1 day'
    }else{
      result = '1 day, ' + result
    }
  }else if(day > 1){
    if(seconds%(3600*24) == 0){
      result = day + 'days'
    }else{
      result = day + ' days, ' + result
    }
  }

  // year
  var year = parseInt(seconds/(86400*365))
  if(year == 1){
    if(seconds%(86400*365) == 0){
      result = '1 year'
    }else{
      result = '1 year, ' + result
    }
  }else if(year > 1){
    if(seconds%(86400*365) == 0){
      result = year + 'years'
    }else{
      result = year + ' years, ' + result
    }
  }
  return result;

}


// Best Practices
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}