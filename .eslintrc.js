module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'standard', 'plugin:storybook/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: ['prettier', 'react', 'import', 'react-hooks', '@typescript-eslint'],
    ignorePatterns: ['*.d.ts', 'lib'],
    rules: {
        'react/display-name': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off'
    }
};
