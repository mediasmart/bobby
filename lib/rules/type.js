"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sample, expected) {
  return sample.constructor === expected;
};