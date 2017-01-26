export default (sample, expected) => {
  let valid = false;

  switch (sample.constructor) {

    case Number:
      valid = sample.toString().length >= expected;
      break;

    default:
      valid = sample.length >= expected;
      break;

  }

  return valid;
};
