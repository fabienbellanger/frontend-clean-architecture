module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [ "<rootDir>/tests/**/*.spec.ts"],
    moduleNameMapper: {
        "@frontend-clean-architecture/domain": "<rootDir>/../domain/lib",
        "@frontend-clean-architecture/adapters": "<rootDir>/lib"
    }
};