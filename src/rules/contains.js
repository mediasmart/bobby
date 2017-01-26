export default (sample, expected) => {
  let valid = false;

  switch (sample.constructor) {

    case Array:
      if (expected.constructor === Array) {
        const founds = expected.filter(exp => sample.find(item => item === exp));
        valid = founds.length === expected.length;
      } else {
        valid = sample.find(item => item === expected) !== undefined;
      }
      break;

    case String:
      valid = sample.includes(expected);
      break;

    case Number:
      valid = sample.toString().includes(expected.toString());
      break;

    default:

  }

  return valid;
};
