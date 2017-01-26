import { assert, expect } from 'chai';
import { length } from '../../src/rules';

describe('length()', function() {

  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', function() {
    expect(typeof length).to.equal('function');
  });

  it('accept a valid length on a {string} sample', function() {
    expect(length(sampleString, 11)).to.equal(true);
  });

  it('refuse a invalid length on a {string} sample', function() {
    expect(length(sampleString, 12)).to.equal(false);
  });

  it('accept a valid length on a {array} sample', function() {
    expect(length(sampleArray, 2)).to.equal(true);
  });

  it('refuse a invalid length on a {array} sample', function() {
    expect(length(sampleArray, 3)).to.equal(false);
  });

  it('accept a valid length on a {number} sample', function() {
    expect(length(sampleNumber, 4)).to.equal(true);
  });

  it('refuse a valid length on a {number} sample', function() {
    expect(length(sampleNumber, 5)).to.equal(false);
  });
});
