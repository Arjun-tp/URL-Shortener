const globals = require('globals')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
        // Custom rules
        semi: ['error', 'never'], // Enforce no semicolons
        indent: ['error', 2], // Enforce consistent 2-space indentation
        'no-trailing-spaces': ['error'], // Disallow trailing spaces
        'no-multiple-empty-lines': ['error', { max: 1 }], // Disallow multiple empty lines
        'object-curly-spacing': ['error', 'always'], // Enforce one space inside curly braces
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        'react/prop-types': 'off', // Disable prop-types check (optional)
        'react/jsx-uses-react': 'off', // Not needed with React 17+
        'react-hooks/rules-of-hooks': 'error', // Enforce React hooks rules
        'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
        'jsx-a11y/anchor-is-valid': 'warn', // Warn on invalid anchors
        'no-console': 'warn', // Warn on console logs
        'no-unused-vars': 'warn', // Warn on unused variables
    },
    settings: {
        react: {
            version: 'detect', // Automatically detect the React version
        },
    },
    globals: {
        ...globals.browser,
    },
}
