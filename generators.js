var Lazy = require('lazy.js');
var squares = Lazy.generate(function () { var i = 0; return function () { i++; return i*i; }; }());
console.log(squares.take(10).toArray());
