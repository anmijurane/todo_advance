import type { Config } from 'jest';

const config: Config = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/Types/**/*.{ts,tsx}',
    '!**/*.type.{ts,tsx}',
    '!**/node_modules/**',
  ],
  collectCoverage: true,
  moduleNameMapper: {
    "^@types-app(.*)$": "<rootDir>/src/Types$1",
    "^@components(.*)$": "<rootDir>/src/components$1"
  },
  setupFilesAfterEnv: [
    "<rootDir>/config/tests/jest.setup.ts"
  ]
}

export default config;
