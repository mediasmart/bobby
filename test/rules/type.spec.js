import { assert, expect } from 'chai';
import type from '../../src/rules/type';

describe('type()', function() {

  it('Up & Running', function() {
    expect(typeof type).to.equal('function');
  });

  it('accept a {string} sample', function() {
    expect(type('hello', String)).to.equal(true);
  });

  it('accept a {number} sample', function() {
    expect(type(1980, Number)).to.equal(true);
  });

  it('accept a {array} sample', function() {
    expect(type(['hello', 'world'], Array)).to.equal(true);
  });

  it('accept a {object} sample', function() {
    expect(type({ hello: 'world' }, Object)).to.equal(true);
  });

  it('accept a {date} sample', function() {
    expect(type(new Date(1980), Date)).to.equal(true);
  });

  it('accept a {boolean} sample', function() {
    expect(type(true, Boolean)).to.equal(true);
  });
});
