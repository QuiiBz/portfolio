module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': 'off',
  }
}
