export default (sample, expected) => {
  let valid = false;

  switch (typeof expected) {

    case 'object':
      switch (sample.constructor) {

        case Number: {
          const isValid = [];

          if (expected.max_length) {
            isValid.push(sample.toString().length <= expected.max_length);
          }
          if (expected.min_length) {
            isValid.push(sample.toString().length >= expected.min_length);
          }
          valid = isValid.every(e => e);
          break;
        }

        default: {
          const isValid = [];

          if (expected.max_length) {
            isValid.push(sample.length <= expected.max_length);
          }
          if (expected.min_length) {
            isValid.push(sample.length >= expected.min_length);
          }
          valid = isValid.every(e => e);
          break;
        }

      }
      break;

    default:
      switch (sample.constructor) {

        case Number:
          valid = sample.toString().length === expected;
          break;

        default:
          valid = sample.length === expected;
          break;

      }
  }

  return valid;
};
