// solution 1
function findLongest(array){
	var result = 0;
  	array.map(n => {
  		if(String(n).length > String(result).length){
  			result = n;
  		}
  	})
  	return result;
}

// solution 2
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);