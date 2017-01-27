export default (sample, expected) => {
  if (sample.constructor === Array) {
    return sample.length === expected.length && JSON.stringify(sample) === JSON.stringify(expected);
  }
  return sample === expected;
};
