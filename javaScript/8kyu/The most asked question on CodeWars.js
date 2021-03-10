// https://www.codewars.com/kata/5935ecef7705f9614500002d

// 1
function detect(comment) {
  return comment.indexOf('Can someone explain') === 0 ? true : false;
}
// 2
function detect(comment) {
  return comment.startsWith('Can someone explain');
}