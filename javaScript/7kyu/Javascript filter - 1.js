function searchNames( logins ){
	return logins.filter((i) => {
		return i[0].slice(-1) === '_';
	})
}