import { assert, expect } from 'chai';
import { exists } from '../../src/rules';

describe('exists()', function() {

  const sample = 'Hello World';

  it('Up & Running', function() {
    expect(typeof exists).to.equal('function');
  });

  it('accept a valid value type', function() {
    expect(exists(sample, true)).to.equal(true);
  });

  it('accept a valid value type', function() {
    expect(exists(undefined, false)).to.equal(true);
  });

});
