/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'jest-environment-jsdom',
  preset: "ts-jest",
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)',
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.svg$": "jest-svg-transformer", 
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
 ],
};