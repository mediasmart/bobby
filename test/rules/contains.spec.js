import { assert, expect } from 'chai';
import contains from '../../src/rules/contains';

describe('contains()', function() {

  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', function() {
    expect(typeof contains).to.equal('function');
  });

  it('accept a valid {string} type on a {string} sample', function() {
    expect(contains(sampleString, 'World')).to.equal(true);
  });

  it('refuse a invalid {string} type on a {string} sample', function() {
    expect(contains(sampleString, 'world')).to.equal(false);
  });

  it('accept a valid {string} type on a {array} sample', function() {
    expect(contains(sampleArray, 'world')).to.equal(true);
  });

  it('refuse a invalid {string} type on a {array} sample', function() {
    expect(contains(sampleArray, 'World')).to.equal(false);
  });

  it('accept a valid {array} type on a {array} sample', function() {
    expect(contains(sampleArray, sampleArray)).to.equal(true);
  });

  it('refuse a invalid {array} type on a {array} sample', function() {
    expect(contains(sampleArray, ['hello', 'mars'])).to.equal(false);
  });

  it('accept a valid {number} type on a {number} sample', function() {
    expect(contains(sampleNumber, 8)).to.equal(true);
  });

  it('refuse a valid {number} type on a {number} sample', function() {
    expect(contains(sampleNumber, 4)).to.equal(false);
  });

  it('refuse a invalid {number} type on a {string} sample', function() {
    expect(contains(sampleString, 1)).to.equal(false);
  });
});
