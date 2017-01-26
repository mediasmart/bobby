"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sample, expected) {
  // return sample.contructor === Number ? sample.toString().length === expected : sample.length === expected;

  var valid = false;

  switch (sample.constructor) {

    case Number:
      valid = sample.toString().length === expected;
      break;

    default:
      valid = sample.length === expected;
      break;

  }

  return valid;
};