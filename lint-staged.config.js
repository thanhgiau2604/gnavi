module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => `yarn check-types`,
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn check-lint ${filenames.join(' ')}`,
}
