String.prototype.toJadenCase = function () {
  return this.split(' ').map(n => n[0].toUpperCase() + n.slice(1)).join(' ')
};

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};