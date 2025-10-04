import nextJest from "next/jest.js"; // 👈 ensure the .js extension is present

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",

  // Remove preset conflict — next/jest automatically handles ts-jest
  // preset: "ts-jest", ❌ REMOVE this line

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // ✅ path alias support
  },

  // Optional — helps Jest ignore certain folders
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
};

export default createJestConfig(customJestConfig);
