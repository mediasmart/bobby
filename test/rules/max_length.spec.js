import { expect } from 'chai';
import max_length from '../../src/rules/max_length';

describe('max_length()', () => {
  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', () => {
    expect(typeof max_length).to.equal('function');
  });

  it('accept a valid max_length on a {string} sample', () => {
    expect(max_length(sampleString, 12)).to.equal(true);
  });

  it('refuse a invalid max_length on a {string} sample', () => {
    expect(max_length(sampleString, 10)).to.equal(false);
  });

  it('accept a valid max_length on a {array} sample', () => {
    expect(max_length(sampleArray, 3)).to.equal(true);
  });

  it('refuse a invalid max_length on a {array} sample', () => {
    expect(max_length(sampleArray, 1)).to.equal(false);
  });

  it('accept a valid max_length on a {number} sample', () => {
    expect(max_length(sampleNumber, 5)).to.equal(true);
  });

  it('refuse a valid max_length on a {number} sample', () => {
    expect(max_length(sampleNumber, 3)).to.equal(false);
  });
});
