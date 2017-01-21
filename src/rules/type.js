export default (sample, expected) => {
  const test = sample.constructor === expected;
  console.log('      📏 type', sample, expected, test);
  return test;
};
