/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  watchPlugins: ["./__tests__/jestWatchPlugin.js"],
  clearMocks: true,
  coverageProvider: "v8",
  transform: {},
  testRegex: "/__tests__/.*(\\.|/)(test|spec)\\.[jt]sx?$",
};

export default config;
