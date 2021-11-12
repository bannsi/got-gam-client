module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  parser: '@typescript-eslint/parser', // this allows ESLint to lint Typscript code
  extends: [
    'prettier', // eslint-config-prettier
    'plugin:prettier/recommended', // eslint-plugin-prettier
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'], // Support linting of ES6
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'] //ts,tsx 에 대해서 eslint 파싱필요
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};
