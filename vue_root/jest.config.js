module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.{j,t}s?(x)'],
  setupFiles: [
    "<rootDir>/setupTest.js"
  ]
}
