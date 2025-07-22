// Husky pre-commit hook configuration
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss,sass}': ['stylelint --fix'],
  '*.{md,json,yaml,yml}': ['prettier --write'],
  '*.scss': ['stylelint --fix']
};
