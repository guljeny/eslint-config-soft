const eslint = require('@eslint/js');
const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = [
  eslint.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    'rules': {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'interface',
          'format': [
            'PascalCase',
          ],
          'prefix': [
            'I',
          ],
          'filter': {
            'regex': 'VM$',
            'match': false,
          },
        },
        {
          'selector': 'typeAlias',
          'format': [
            'PascalCase',
          ],
          'prefix': [
            'T',
          ],
        },
        {
          'selector': 'variable',
          'format': [
            'camelCase',
            'PascalCase',
            'UPPER_CASE',
          ],
        },
        {
          'selector': 'variable',
          'modifiers': ['const', 'exported', 'unused'],
          'types': ['boolean'],
          'format': ['PascalCase'],
          'prefix': ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          'blankLine': 'always',
          'prev': [
            'multiline-const',
            'multiline-let',
          ],
          'next': '*',
        },
        {
          'blankLine': 'always',
          'prev': '*',
          'next': [
            'multiline-const',
            'multiline-let',
          ],
        },
        {
          'blankLine': 'never',
          'prev': [
            'singleline-let',
            'singleline-const',
          ],
          'next': [
            'singleline-let',
            'singleline-const',
          ],
        },
        {
          'blankLine': 'always',
          'prev': '*',
          'next': 'function',
        },
      ],
      'newline-before-return': 'error',
      'react/jsx-filename-extension': [
        'error',
        {
          'extensions': [
            '.tsx',
          ],
        },
      ],
      'react/require-default-props': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': 'off',
      '@stylistic/js/semi': "error",
      'curly': [
        'error',
        'multi-line',
      ],
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'object-curly-newline': [
        'error',
        {
          'consistent': true,
        },
      ],
      'react/destructuring-assignment': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-indent': ['error', 2, { 'indentLogicalExpressions': true }],
      'no-await-in-loop': 'off',
      'react/no-multi-comp': 'error',
      'no-restricted-syntax': 'off',
      'react/no-unused-prop-types': 'error',
      'react/no-children-prop': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { 'allowShortCircuit': true },
      ],
      'no-nested-ternary': 'error',
      'max-len': ['error', { 'code': 80 }],
      'react/no-array-index-key': 'error',
      'prefer-spread': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'arrow-parens': [
        'error',
        'as-needed',
      ],
      'jsx-quotes': [
        'error',
        'prefer-single',
      ],
      'no-param-reassign': 'error',
      'no-underscore-dangle': 'off',
      'react/jsx-no-bind': 'off',
      'react/default-props-match-prop-types': 'off',
      'no-prototype-builtins': 'off',
      'prefer-destructuring': 'off',
      'react/prop-types': 'off',
      'no-restricted-exports': ['error', { 'restrictedNamedExports': ['off'] }],
      'arrow-body-style': ['error', 'as-needed'],
      'no-alert': 'off',
      'max-classes-per-file': ['error', 1],
      '@typescript-eslint/no-useless-constructor': 'off',
      'class-methods-use-this': 'error',
      'no-plusplus': [
        'error',
        {
          'allowForLoopAfterthoughts': true,
        },
      ],
      'no-multi-assign': 'error',
      'consistent-return': 'off',
      'func-names': 'off',
      'eol-last': ['error', 'always'],
      'react/no-danger': 'off',
      'cypress/no-unnecessary-waiting': 'off',
      'no-multiple-empty-lines': [
        'error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 },
      ],
      '@stylistic/js/array-bracket-spacing': ['error', 'never'],
      '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/js/block-spacing': 'error',
      '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/js/computed-property-spacing': ['error', 'never'],
      '@stylistic/js/function-call-spacing': ['error', 'never'],
      '@stylistic/js/key-spacing': 'error',
      '@stylistic/js/keyword-spacing': 'error',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/no-whitespace-before-property': 'error',
      '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/rest-spread-spacing': ['error', 'never'],
      '@stylistic/js/semi-spacing': 'error',
      '@stylistic/js/space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      '@stylistic/js/space-in-parens': ['error', 'never'],
      '@stylistic/js/space-infix-ops': 'error',
      '@stylistic/js/space-unary-ops': 'error',
      '@stylistic/js/spaced-comment': ['error', 'always'],
      '@stylistic/js/switch-colon-spacing': 'error',
      '@stylistic/js/template-curly-spacing': 'error',
      '@stylistic/js/template-tag-spacing': ['error', 'never'],
      '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/js/function-paren-newline': ['error', 'consistent'],
      '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/object-curly-newline': ['error', { 'consistent': true }],
      '@stylistic/js/object-property-newline': [
        'error', { 'allowAllPropertiesOnSameLine': true },
      ],
      '@stylistic/js/operator-linebreak': ['error', 'before'],
      '@stylistic/js/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'never', prev: 'import', next: 'import' },
      ],
      '@stylistic/js/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    },
  },
];
