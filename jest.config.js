export default {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for browser-like testing
  roots: ['<rootDir>/__tests__'], // Specify the root directory for tests
  moduleFileExtensions: ['ts', 'js'], // Recognize TypeScript and JavaScript files
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
};
