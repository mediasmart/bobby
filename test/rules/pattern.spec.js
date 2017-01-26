import { assert, expect } from 'chai';
import { pattern } from '../../src/rules';

describe('pattern()', function() {

  const patternDate = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

  it('Up & Running', function() {
    expect(typeof pattern).to.equal('function');
  });

  it('Valid a sample with {YYYY-MM-DD} with a pattern', function() {
    expect(pattern('1980-04-10', patternDate)).to.equal(true);
  });

  it('Refuse a sample with {YYYY|MM|DD} with a pattern', function() {
    expect(pattern('1980|04|10', patternDate)).to.equal(false);
  });
});
