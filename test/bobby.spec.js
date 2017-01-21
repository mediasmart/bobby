import { assert, expect } from 'chai';
import bobby from '../src';

describe('bobby', function() {

  // let bobby;
  const sample = {
    name: 'javi',
    year: 1980,
    languages: ['basque', 'spanish', 'english', 'thai'],
    networks: {
      twitter: 'soyjavi',
    },
  };

  const schema = {
    name: { contains: 'av', exists: true, type: String, length: 4, value: 'com' },
    languages: { type: Array, length: 4, contains: ['spanish', 'english'] },
    year: { type: Number, exists: true, value: 1981 },
    'networks.twitter': { exists: true, contains: 'javi' },
  };

  it('Up & Running', function() {
    expect(typeof bobby).to.equal('function');
    console.log('👮', bobby(sample, schema));
  });
});
