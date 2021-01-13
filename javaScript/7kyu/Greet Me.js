// solution 1
var greet = function(name) {
	return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`
};

// solution 2
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
	return "Hello " + name.capitalize() + "!";
}