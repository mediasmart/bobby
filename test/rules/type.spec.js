import { expect } from 'chai';
import type from '../../src/rules/type';

describe('type()', () => {
  it('Up & Running', () => {
    expect(typeof type).to.equal('function');
  });

  it('accept a {string} sample', () => {
    expect(type('hello', String)).to.equal(true);
  });

  it('reject a {string} sample', () => {
    expect(type(1980, String)).to.equal(false);
  });

  it('accept a {number} sample', () => {
    expect(type(1980, Number)).to.equal(true);
  });

  it('reject a {number} sample', () => {
    expect(type('1980', Number)).to.equal(false);
  });

  it('accept a {array} sample', () => {
    expect(type(['hello', 'world'], Array)).to.equal(true);
  });

  it('reject a {array} sample', () => {
    expect(type({ hello: 'world' }, Array)).to.equal(false);
  });

  it('accept a {object} sample', () => {
    expect(type({ hello: 'world' }, Object)).to.equal(true);
  });

  it('reject a {object} sample', () => {
    expect(type(['hello', 'world'], Object)).to.equal(false);
  });

  it('accept a {date} sample', () => {
    expect(type(new Date(1980), Date)).to.equal(true);
  });

  it('reject a {date} sample', () => {
    expect(type(true, Date)).to.equal(false);
  });

  it('accept a {boolean} sample', () => {
    expect(type(true, Boolean)).to.equal(true);
  });

  it('reject a {boolean} sample', () => {
    expect(type(new Date(1980), Boolean)).to.equal(false);
  });

  it('accept a {undefined} sample', () => {
    expect(type(undefined, String)).to.equal(true);
  });
});
