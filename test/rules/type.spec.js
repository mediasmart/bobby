import { expect } from 'chai';
import type from '../../src/rules/type';

describe('type()', () => {

  it('Up & Running', () => {
    expect(typeof type).to.equal('function');
  });

  it('accept a {string} sample', () => {
    expect(type('hello', String)).to.equal(true);
  });

  it('accept a {number} sample', () => {
    expect(type(1980, Number)).to.equal(true);
  });

  it('accept a {array} sample', () => {
    expect(type(['hello', 'world'], Array)).to.equal(true);
  });

  it('accept a {object} sample', () => {
    expect(type({ hello: 'world' }, Object)).to.equal(true);
  });

  it('accept a {date} sample', () => {
    expect(type(new Date(1980), Date)).to.equal(true);
  });

  it('accept a {boolean} sample', () => {
    expect(type(true, Boolean)).to.equal(true);
  });
});
