import { expect } from 'chai';
import { less_than } from '../../src/rules';

describe('less_than', () => {
  it('returns true if the sample is greater than the expected', () => {
    expect(less_than(10, 100)).to.equal(true);
  });

  it('returns false if the sample is less than the expected', () => {
    expect(less_than(200, 1)).to.equal(false);
  });
});
