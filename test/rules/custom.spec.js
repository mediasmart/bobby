import { assert, expect } from 'chai';
import { custom } from '../../src/rules';

describe('custom()', function() {

  const sampleText = 'hello';
  const callback = (sample) => sample === sampleText;

  it('Up & Running', function() {
    expect(typeof custom).to.equal('function');
  });

  it('accept a valid sample for custom callback', function() {
    expect(custom(sampleText, callback)).to.equal(true);
  });

  it('refuse a valid sample for custom callback', function() {
    expect(custom('hola', callback)).to.equal(false);
  });
});
