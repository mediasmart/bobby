export default (sample, expected) => {
  const valid = (sample !== undefined) === expected;
  console.log('      📏 exists', sample, expected, valid);

  return valid;
};
