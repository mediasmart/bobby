import { expect } from 'chai';
import custom from '../../src/rules/custom';

describe('custom()', () => {
  const sampleText = 'hello';
  const callback = (sample) => sample === sampleText;

  it('Up & Running', () => {
    expect(typeof custom).to.equal('function');
  });

  it('accept a valid sample for custom callback', () => {
    expect(custom(sampleText, callback)).to.equal(true);
  });

  it('refuse a valid sample for custom callback', () => {
    expect(custom('hola', callback)).to.equal(false);
  });
});
