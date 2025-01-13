// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';

// Use FlatCompat to support old-style configs during migration
const compat = new FlatCompat();

export default [
  // Add your existing configuration
  ...compat.config({
    extends: ['eslint:recommended'], // Replace with your current "extends" config
    parserOptions: {
      ecmaVersion: 2021,
    },
    env: {
      node: true,
      browser: true,
      es2021: true,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  }),
];
