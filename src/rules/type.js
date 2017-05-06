export default (sample, expected) => (
  typeof sample === 'undefined' || sample.constructor === expected
);
