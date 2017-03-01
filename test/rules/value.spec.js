import { expect } from 'chai';
import value from '../../src/rules/value';

describe('value()', () => {
  const sampleString = 'Hello World';
  const sampleArray = ['hello', 'world'];
  const sampleNumber = 1980;

  it('Up & Running', () => {
    expect(typeof value).to.equal('function');
  });

  it('accept a {string} sample', () => {
    expect(value(sampleString, 'Hello World')).to.equal(true);
  });

  it('refuses a {string} sample', () => {
    expect(value(sampleString, 'hello world')).to.equal(false);
  });

  it('accept a {number} sample', () => {
    expect(value(sampleNumber, 1980)).to.equal(true);
  });

  it('refuses a {number} sample', () => {
    expect(value(sampleNumber, '1980')).to.equal(false);
    expect(value(sampleNumber, 1981)).to.equal(false);
  });

  it('accept a {array} sample', () => {
    expect(value(sampleArray, ['hello', 'world'])).to.equal(true);
  });

  it('refuses a {array} sample', () => {
    expect(value(sampleArray, ['hello', 'World'])).to.equal(false);
    expect(value(sampleArray, ['hello'])).to.equal(false);
  });
});
