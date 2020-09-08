const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  verbose: true,
  automock: false,
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/theme/index.ts',
    '!<rootDir>/src/types/index.ts',
    '!<rootDir>/src/components/index.ts',
    '!<rootDir>/src/utils/helpers/index.ts',
    '!**/*.d.ts'
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx)',
    '**/?(*.)+(spec|test).+(ts|tsx)'
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/main/test/cypress'
  ],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['<rootDir>/src/config/setupEnzyme.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/@platformbuilders/helpers/dist'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
