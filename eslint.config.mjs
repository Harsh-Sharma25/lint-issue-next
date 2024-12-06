import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends('next/core-web-vitals', 'prettier', 'plugin:@next/next/recommended'),
  {
    plugins: {
      react,
      prettier,
    },

    rules: {
      curly: ['error', 'multi-line'],
      'arrow-body-style': ['error', 'as-needed'],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'react/jsx-curly-brace-presence': [2],
    },
  },
  { ignores: ['.next/'] },
];

export default config;
