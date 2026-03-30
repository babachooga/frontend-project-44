import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'], 
    rules: {
      ...js.configs.recommended.rules,
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'no-console': 'off',
    },
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'], 
    plugins: {
      json,
    },
    language: 'json/json',
    rules: {
      ...json.configs.recommended.rules,
    },
  },

  {
    ignores: ['node_modules/', 'dist/'],
  },
];
