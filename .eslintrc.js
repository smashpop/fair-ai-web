/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    indent: ['error', 2, {
      ...require('eslint-config-standard').rules.indent[2],
      flatTernaryExpressions: true,
      offsetTernaryExpressions: false
    }],
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
