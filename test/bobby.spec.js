import { assert, expect } from 'chai';
import Bobby from '../src';

describe('Bobby', function() {

  // let bobby;
  const value = {
    name: 'javi',
    twitter: 'soyjavi',
  };
  const schema = {
    name: {
      exists: true,
      type: String,
    },
    year: {
      type: Number,
    },
  };

  // beforeEach(() => bobby = new Bobby());

  it('Up & Running', function() {


    expect(typeof Bobby).to.equal('function');

    console.log('👮', Bobby(value, schema));


    // const methods = Object.keys(bobby);


    //
    // expect(methods.length).to.equal(2);
    //
    // expect(methods[0]).to.equal('intent');
    // expect(typeof bobby.intent).to.equal('function');
    //
    // expect(methods[1]).to.equal('listen');
    // expect(typeof bobby.listen).to.equal('function');
  });
});
