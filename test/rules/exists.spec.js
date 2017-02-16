import { expect } from 'chai';
import exists from '../../src/rules/exists';

describe('exists()', () => {
  const sample = 'Hello World';

  it('Up & Running', () => {
    expect(typeof exists).to.equal('function');
  });

  it('accept a valid value type', () => {
    expect(exists(sample, true)).to.equal(true);
  });

  it('accept a valid value type', () => {
    expect(exists(undefined, false)).to.equal(true);
  });
});
