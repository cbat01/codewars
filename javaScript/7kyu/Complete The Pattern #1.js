function pattern(n){
 	var output="";
    for(let i=1;i<=n;i++){
    	output += String(i).repeat(i) + '\n';
    }
    return output.slice(0,-1);
}