// Simple async-q example

var q = require('q');
var async = require('async-q');

var squareNum = function (num) {
   var defer = q.defer();
   defer.resolve(num * num);
   return defer.promise;
};

var list = [1,2,3,4,5,6,7,8,9,10];

async.map(list, function (num) {
  return squareNum(num);
}).then(function (transformedList) {
  console.log(transformedList);
}).done();

// Prints: [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

