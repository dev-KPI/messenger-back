module.exports = {
  '*': 'prettier --check --ignore-unknown',
  '*.js': 'eslint --cache',
  '*.{js,ts}': () => 'npm run typescript:check',
};