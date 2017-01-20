import rules from './rules';

export default (sample, schema) => {
  Object.keys(schema).map(field => {
    const value = sample[field];
    const schemaField = schema[field];
    return Object.keys(schemaField).map(rule => rules[rule](value, schemaField[rule]));
  });
};
