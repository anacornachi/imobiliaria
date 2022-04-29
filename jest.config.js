const nextJest = require('next/jest');
const {compilerOptions} = require('./tsconfig');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    'components/(.*)': ['<rootDir>/src/components/$1'],
    'services/(.*)': ['<rootDir>/src/services/$1'],
  },
};

module.exports = createJestConfig(customJestConfig);
