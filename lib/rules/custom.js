"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sample, callback) {
  return callback.apply(callback, [sample]);
};