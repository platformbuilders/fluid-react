const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  verbose: true,
  automock: false,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 75,
      statements: 80,
    },
  },
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/styles.{ts,tsx}',
    '!<rootDir>/src/**/style.{ts,tsx}',
    '!<rootDir>/src/config/*',
    '!<rootDir>/src/enums/*',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/theme/index.ts',
    '!<rootDir>/src/types/index.ts',
    '!<rootDir>/src/components/index.ts',
    '!**/*.d.ts',
  ],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/config/jest.setup.ts',
    'jest-canvas-mock',
  ],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
