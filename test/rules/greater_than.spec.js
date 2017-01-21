import { expect } from 'chai';
import { greater_than } from '../../src/rules';

describe('greater_than', () => {
  it('returns true if the sample is greater than the expected', () => {
    expect(greater_than(50, 10)).to.equal(true);
  });

  it('returns false if the sample is less than the expected', () => {
    expect(greater_than(100, 200)).to.equal(false);
  });
});
