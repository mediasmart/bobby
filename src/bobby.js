import rules from './rules';

export default (sample, schema) => {
  const errors = [];

  Object.keys(schema).forEach(field => {
    const value = field.split('.').reduce((previous, current) => {
      return previous ? previous[current] : undefined;
    }, sample);
    const schemaField = schema[field];

    Object.keys(schemaField).forEach(rule => {
      const expected = schemaField[rule];
      const pass = rules[rule] && rules[rule](value, expected);
      if (pass !== true) errors.push({ field, rule, expected, value });
    });
  });

  return errors;
};
