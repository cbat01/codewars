// solution 1
function capitalize(s){
	const a = s.split('').map((n,i) => i%2 == 0 ? n.toUpperCase() : n).join('');
	const b = s.split('').map((n,i) => i%2 == 1 ? n.toUpperCase() : n).join('');
	return [a,b]
}

// solution 2
function capitalize(s){
	return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
}