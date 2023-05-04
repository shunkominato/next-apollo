module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['.eslintrc.*', 'next.config.*'],
  rules: {
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'react/jsx-indent': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    'no-unneeded-ternary': 'warn',
    'react/require-default-props': 'off',
    'no-alert': 'off',
    'react/display-name': 'off',
    'no-non-null-assertion': 'off',
    curly: 'off',
  },
};
