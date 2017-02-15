import { expect } from 'chai';
import email from '../../src/rules/email';

describe('email()', () => {
  it('Up & Running', () => {
    expect(typeof email).to.equal('function');
  });

  it('accept a valid {email} sample', () => {
    expect(email('hello@soyjavi.com', true)).to.equal(true);
    expect(email('h@s.co', true)).to.equal(true);
  });

  it('refuse a invalid {email} sample', () => {
    expect(email('hello[at]soyjavi.com', false)).to.equal(true);
    expect(email('hello@soyjavi.c', false)).to.equal(true);
  });
});
