import nextJest from "next/jest.js";
import { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/services/(.*)$": "<rootDir>/src/app/services/$1",
    "^@/utils/(.*)$": "<rootDir>/src/app/utils/$1",
    "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.tsx",
  },
  modulePathIgnorePatterns: ["<rootDir>/__tests__/utils"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
