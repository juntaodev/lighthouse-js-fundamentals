const talkingCalendar = function(date) {
  let month = date.substring(5,7)
  let day = date.substring(8,10)
  let year = date.substring(0,4)
  
  const twelveMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  month = twelveMonth[month-1]

  if(day.charAt(0) === '0') {
    day = day.substring(1);// delete starting zero
  }
  if(day === '1' || day === '21' || day === '31') {
    day += 'st';// first, twenty-first, thirty-first
  } else if(day === '2' || day === '22') {
    day += 'nd';// second, twenty-second
  } else if(day === '3' || day === '23') {
    day += 'rd';// third, twenty-third
  } else {
    day += 'th';// all other cases
  }

  return `${month} ${day}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));