import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
// import prettier from 'prettier';
import eslint from '@eslint/js';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // extends: [js.configs.recommended, react.configs['jsx-runtime'], ...tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked, prettier],
    extends: [eslint.configs.recommended, tseslint.configs.strict, tseslint.configs.stylisticTypeChecked ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      // '@typescript-eslint/array-type': 'error',
      // '@typescript-eslint/consistent-type-imports': 'error',
      // 'react/jsx-max-props-per-line': [true, { "maximum": { "single": 3, "multi": 1 } }],
      // "@typescript-eslint/no-explicit-any": "error",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
