import { expect } from 'chai';
import { even } from '../../src/rules';

describe('even', () => {
  describe('when expected is true', () => {
    it('returns true with an even number', () => {
      expect(even(4, true)).to.equal(true);
    });

    it('returns false with an even number', () => {
      expect(even(5, true)).to.equal(false);
    });
  });

  describe('when expected is false', () => {
    it('returns true with an even number', () => {
      expect(even(5, false)).to.equal(true);
    });

    it('returns false with an even number', () => {
      expect(even(4, false)).to.equal(false);
    });
  });
});
