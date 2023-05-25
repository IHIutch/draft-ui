module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
