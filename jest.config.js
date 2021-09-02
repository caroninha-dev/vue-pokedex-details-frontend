module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"]
  ,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,vue}", "!**/node_modules/**", "!<rootDir>/src/main.js"],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "vue-jest"
  }
}