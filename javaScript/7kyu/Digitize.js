// solution 1
function digitize(n) {
  return String(n).split('').map(n => parseInt(n))
}

// solution 2
function digitize(n) {
  return String(n).split('').map(Number);
}