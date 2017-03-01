import { expect } from 'chai';
import pattern from '../../src/rules/pattern';

describe('pattern()', () => {
  const patternDate = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

  it('Up & Running', () => {
    expect(typeof pattern).to.equal('function');
  });

  it('Valid a sample with {YYYY-MM-DD} with a pattern', () => {
    expect(pattern('1980-04-10', patternDate)).to.equal(true);
  });

  it('Refuse a sample with {YYYY|MM|DD} with a pattern', () => {
    expect(pattern('1980|04|10', patternDate)).to.equal(false);
  });
});
