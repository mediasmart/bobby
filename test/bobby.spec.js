import { assert, expect } from 'chai';
import bobby from '../src';

describe('👮 bobby.js', function() {

  // let bobby;
  const sample = {
    name: 'javi',
    year: 1980,
    languages: ['basque', 'spanish', 'english', 'thai'],
    networks: {
      twitter: 'soyjavi',
    },
  };

  const schemaValid = {
    name: { contains: 'av', exists: true, type: String, length: 4, value: 'javi' },
    languages: { type: Array, length: 4, contains: ['spanish', 'english'] },
    year: { type: Number, exists: true, value: 1980 },
    'networks.twitter': { exists: true, contains: 'javi' },
  };

  const schemaError = {
    name: { value: 'com' },
    languages: { },
    year: { value: 1981 },
    'networks.twitter': { },
  };

  it('Up & Running', function() {
    expect(typeof bobby).to.equal('function');
  });

  it('Schema is valid', function() {
    const errors = bobby(sample, schemaValid);
    expect(errors.length).to.equal(0);
  });

  it('Schema with errors', function() {
    const errors = bobby(sample, schemaError);
    expect(errors.length).to.equal(2);
  });

});
