import { expect } from 'chai';
import { odd } from '../../src/rules';

describe('odd', () => {
  describe('when expected is true', () => {
    it('returns true with an odd number', () => {
      expect(odd(1, true)).to.equal(true);
    });

    it('returns false with an odd number', () => {
      expect(odd(2, true)).to.equal(false);
    });
  });

  describe('when expected is false', () => {
    it('returns true with an odd number', () => {
      expect(odd(2, false)).to.equal(true);
    });

    it('returns false with an odd number', () => {
      expect(odd(1, false)).to.equal(false);
    });
  });
});
