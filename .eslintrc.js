module.exports = {
  root: true,
  extends: ['plugin:import/recommended', 'airbnb-typescript', 'prettier'],
  plugins: ['import', 'react', 'react-native', '@typescript-eslint', 'prettier', 'only-error'],
  env: {
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
  settings: {
    'import/ignore': ['react-native'],
  },
};
