// solution 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  	return (enteredCode !== correctCode || Date.parse(currentDate) > Date.parse(expirationDate)) ? false : true;
}

// solution 2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}