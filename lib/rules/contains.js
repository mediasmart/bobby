"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sample, expected) {
  var valid = false;

  switch (sample.constructor) {

    case Array:
      if (expected.constructor === Array) {
        var founds = expected.filter(function (exp) {
          return sample.find(function (item) {
            return item === exp;
          });
        });
        valid = founds.length === expected.length;
      } else {
        valid = sample.find(function (item) {
          return item === expected;
        }) !== undefined;
      }
      break;

    case String:
      valid = sample.includes(expected);
      break;

    case Number:
      valid = sample.toString().includes(expected.toString());
      break;

    default:

  }

  return valid;
};