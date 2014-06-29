var Lazy = require('lazy.js');
var upTo = 100;
var sumSquares = Lazy.range(upTo + 1).map(function (num) { return num*num; }).sum()
var squareSum = (function (num) { return num * num; })(Lazy.range(upTo + 1).sum());
var answer = squareSum - sumSquares;
console.log(answer);
