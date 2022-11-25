module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.tsx', '.ts', '.jsx'],
    globals: {
        'ts-jest': {
            useESM: true,
            isolatedModules: true,
        },
    },
    // collectCoverage: process.env.TEST_COVERAGE,
    collectCoverageFrom: [
        "<rootDir>/src/client/shared/**/*.{tsx,ts,js,jsx}",
        '!<rootDir>/**/*.d.ts',
        '!<rootDir>/**/tests/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/**/test/**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
    ],
    moduleNameMapper: {
        '@meesho/crystal':
            '<rootDir>/node_modules/@meesho/crystal/crystal.esm.js',
        "^@typings(.*)$": "<rootDir>/src/client/typings$1",
        "^@store(.*)$": "<rootDir>/src/client/store$1",
        "^@constants(.*)$": "<rootDir>/src/client/constants$1",
        "^@enums(.*)$": "<rootDir>/src/client/enums$1",
        "^@shared(.*)$": "<rootDir>/src/client/shared$1",
        "^@pages(.*)$": "<rootDir>/src/client/pages$1",
        "^@helpers(.*)$": "<rootDir>/src/client/helpers$1",
        "^@utils(.*)$": "<rootDir>/src/client/utils$1",
        "^@hooks(.*)$": "<rootDir>/src/client/hooks$1",
    },
    transformIgnorePatterns: ['/node_modules/(?!(@meesho)/)'],
    verbose: true,
    setupFiles: ['./jest.setup.js'],
};
