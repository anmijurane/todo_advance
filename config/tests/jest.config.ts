import type { Config } from 'jest';

const config: Config = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  // collectCoverageFrom: [
  //   '**/*.{js,jsx}',
  //   '!**/node_modules/**',
  // ],
  // collectCoverage: true,
  moduleNameMapper: {
    "^@types-app(.*)$": "<rootDir>/src/Types$1",
    "^@components(.*)$": "<rootDir>/src/components$1"
  },
  setupFilesAfterEnv: [
    "<rootDir>/config/tests/jest.setup.ts"
  ]
}

export default config;
