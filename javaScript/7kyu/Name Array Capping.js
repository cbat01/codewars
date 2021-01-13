function capMe(names) {
	return names.map(n => n.charAt(0).toUpperCase()+n.slice(1).toLowerCase());
}