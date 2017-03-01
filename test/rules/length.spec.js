import { expect } from 'chai';
import length from '../../src/rules/length';

describe('length()', () => {
  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', () => {
    expect(typeof length).to.equal('function');
  });

  it('accept a valid length on a {string} sample', () => {
    expect(length(sampleString, 11)).to.equal(true);
  });

  it('refuse a invalid length on a {string} sample', () => {
    expect(length(sampleString, 12)).to.equal(false);
  });

  it('accept a valid length on a {string} sample with object {min_length}', () => {
    expect(length(sampleString, { min_length: 10 })).to.equal(true);
  });

  it('refuse a valid length on a {string} sample with object {min_length}', () => {
    expect(length(sampleString, { min_length: 12 })).to.equal(false);
  });

  it('accept a valid length on a {string} sample with object {max_length}', () => {
    expect(length(sampleString, { max_length: 12 })).to.equal(true);
  });

  it('refuse a valid length on a {string} sample with object {max_length}', () => {
    expect(length(sampleString, { max_length: 10 })).to.equal(false);
  });

  it('accept a valid length on a {string} sample with object {min_length, max_length}', () => {
    expect(length(sampleString, { min_length: 10, max_length: 12 })).to.equal(true);
  });

  it('refuse a valid length on a {string} sample with object {min_length, max_length}', () => {
    expect(length(sampleString, { min_length: 12, max_length: 13 })).to.equal(false);
  });

  it('accept a valid length on a {array} sample', () => {
    expect(length(sampleArray, 2)).to.equal(true);
  });

  it('refuse a invalid length on a {array} sample', () => {
    expect(length(sampleArray, 3)).to.equal(false);
  });

  it('accept a valid length on a {array} sample with object {min_length}', () => {
    expect(length(sampleArray, { min_length: 1 })).to.equal(true);
  });

  it('refuse a valid length on a {array} sample with object {min_length}', () => {
    expect(length(sampleArray, { min_length: 3 })).to.equal(false);
  });

  it('accept a valid length on a {array} sample with object {max_length}', () => {
    expect(length(sampleArray, { max_length: 5 })).to.equal(true);
  });

  it('refuse a valid length on a {array} sample with object {max_length}', () => {
    expect(length(sampleArray, { max_length: 1 })).to.equal(false);
  });

  it('accept a valid length on a {array} sample with object {min_length, max_length}', () => {
    expect(length(sampleArray, { min_length: 1, max_length: 5 })).to.equal(true);
  });

  it('refuse a valid length on a {array} sample with object {min_length, max_length}', () => {
    expect(length(sampleArray, { min_length: 4, max_length: 4 })).to.equal(false);
  });

  it('accept a valid length on a {number} sample', () => {
    expect(length(sampleNumber, 4)).to.equal(true);
  });

  it('refuse a valid length on a {number} sample', () => {
    expect(length(sampleNumber, 5)).to.equal(false);
  });

  it('accept a valid length on a {number} sample with object {min_length}', () => {
    expect(length(sampleNumber, { min_length: 3 })).to.equal(true);
  });

  it('refuse a valid length on a {number} sample with object {min_length}', () => {
    expect(length(sampleNumber, { min_length: 5 })).to.equal(false);
  });

  it('accept a valid length on a {number} sample with object {max_length}', () => {
    expect(length(sampleNumber, { max_length: 5 })).to.equal(true);
  });

  it('refuse a valid length on a {number} sample with object {max_length}', () => {
    expect(length(sampleNumber, { max_length: 3 })).to.equal(false);
  });

  it('accept a valid length on a {number} sample with object {min_length, max_length}', () => {
    expect(length(sampleNumber, { min_length: 3, max_length: 5 })).to.equal(true);
  });

  it('refuse a valid length on a {number} sample with object {min_length, max_length}', () => {
    expect(length(sampleNumber, { min_length: 5, max_length: 6 })).to.equal(false);
  });
});
