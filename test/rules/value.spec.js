import { assert, expect } from 'chai';
import value from '../../src/rules/value';

describe('value()', function() {

  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', function() {
    expect(typeof value).to.equal('function');
  });

  it('accept a {string} sample', function() {
    expect(value(sampleString, 'Hello World')).to.equal(true);
  });

  it('refuses a {string} sample', function() {
    expect(value(sampleString, 'hello world')).to.equal(false);
  });

  it('accept a {number} sample', function() {
    expect(value(sampleNumber, 1980)).to.equal(true);
  });

  it('refuses a {number} sample', function() {
    expect(value(sampleNumber, '1980')).to.equal(false);
    expect(value(sampleNumber, 1981)).to.equal(false);
  });

  // @TODO: FIX
  // it('accept a {array} sample', function() {
  //   expect(value(sampleArray, ['hello', 'world'])).to.equal(true);
  // });

  it('refuses a {array} sample', function() {
    expect(value(sampleArray, ['hello', 'world'])).to.equal(false);
    expect(value(sampleArray, ['hello'])).to.equal(false);
  });
});
