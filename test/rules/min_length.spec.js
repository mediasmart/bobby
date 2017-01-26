import { expect } from 'chai';
import min_length from '../../src/rules/min_length';

describe('min_length()', () => {
  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', () => {
    expect(typeof min_length).to.equal('function');
  });

  it('accept a valid min_length on a {string} sample', () => {
    expect(min_length(sampleString, 10)).to.equal(true);
  });

  it('refuse a invalid min_length on a {string} sample', () => {
    expect(min_length(sampleString, 12)).to.equal(false);
  });

  it('accept a valid min_length on a {array} sample', () => {
    expect(min_length(sampleArray, 1)).to.equal(true);
  });

  it('refuse a invalid min_length on a {array} sample', () => {
    expect(min_length(sampleArray, 3)).to.equal(false);
  });

  it('accept a valid min_length on a {number} sample', () => {
    expect(min_length(sampleNumber, 3)).to.equal(true);
  });

  it('refuse a valid min_length on a {number} sample', () => {
    expect(min_length(sampleNumber, 5)).to.equal(false);
  });
});
