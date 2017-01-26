'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sample, schema) {
  var errors = [];

  (0, _keys2.default)(schema).forEach(function (field) {
    var value = field.split('.').reduce(function (previous, current) {
      return previous ? previous[current] : undefined;
    }, sample);
    var schemaField = schema[field];

    (0, _keys2.default)(schemaField).forEach(function (rule) {
      var expected = schemaField[rule];
      var pass = _rules2.default[rule] && _rules2.default[rule](value, expected);
      if (pass !== true) errors.push({ field: field, rule: rule, expected: expected, value: value });
    });
  });

  return errors;
};