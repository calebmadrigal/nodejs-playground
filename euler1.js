var Lazy = require('lazy.js');
var answer = Lazy.range(1000).filter(function (num) { return num % 3 == 0 || num % 5 == 0; }).sum();
console.log(answer);
