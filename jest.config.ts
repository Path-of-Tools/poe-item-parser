import type { Config } from 'jest';

const config: Config = {
  // Use ts-jest to handle TypeScript files
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Match test files with .ts, .tsx, .js, or .jsx extensions
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  // Collect coverage from .ts files
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/dist/**'],

  // Set the test environment
  testEnvironment: 'node',
};

export default config;