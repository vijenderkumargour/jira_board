import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}", // include all source files
    "!src/**/__tests__/**", // ignore test files
    "!src/**/*.{d.ts}", // ignore type declaration files
    "!src/**/layout.{ts,tsx}", // ignore layouts
    "!src/**/index.{ts,tsx,js,jsx}", // ignore index files that just re-export
    "!src/**/utils/**", // ignore utility folder if you have one
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // ✅ Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default createJestConfig(customJestConfig);
