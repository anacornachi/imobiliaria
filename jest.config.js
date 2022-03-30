import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    'components/(.*)': ['<rootDir>/src/components/$1'],
  },
};

export default createJestConfig(customJestConfig);
