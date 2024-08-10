module.exports = {
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^hooks(.*)$': '<rootDir>/src/hooks$1',
        '^types(.*)$': '<rootDir>/src/types$1',
        '^components(.*)$': '<rootDir>/src/components$1',
        '^theme$': '<rootDir>/src/theme',
        '^const$': '<rootDir>/src/const',
        '^utils/(.*)$': '<rootDir>/src/utils/$1',
    },
};
