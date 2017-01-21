import rules from './rules';

export default (sample, schema) => {
  return Object.keys(schema).map(field => {
    const value = field.split('.').reduce((previous, current) => {
      return previous ? previous[current] : undefined;
    }, sample);
    const schemaField = schema[field];

    return Object.keys(schemaField).map(rule => {
      const expected = schemaField[rule];
      const pass = rules[rule] && rules[rule](value, expected);
      if (pass !== true) return { field, rule, expected, value };
    });
  });
};
