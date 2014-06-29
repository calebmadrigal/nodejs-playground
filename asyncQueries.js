var _ = require('lodash');
var util = require('util');
var request = require('request');
var q = require('q');
var async = require('async-q');

var getMessage = function (msgId) {
  var defer = q.defer();
  request({url: util.format('http://localhost:3000/messages/%s/', msgId),
           method: 'GET',
           headers: {'Content-Type': 'application/json'} },
    function (err, response, body) {
      if (err) {
        console.log("Failed to get message: ", err);
        defer.reject(err);
      }
      else {
        defer.resolve(body);
      }
    }
  );
  return defer.promise;
};

var msgIds = ['0','1','2','3'];

async.map(msgIds, function (msgId) {
  return getMessage(msgId).then(
    function (msg) {
      return JSON.parse(msg);
    });
}).then(
  function (messageList) {
    console.log(messageList);
  },
  function (err) {
    console.log("ERROR: ", err);
  }
).done();

