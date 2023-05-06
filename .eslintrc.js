module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parserOptions: {
        project: ['tsconfig.json']
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  ignorePatterns: ['/*.js'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedCompoents: 'arrow-function'
      }
    ],
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // External packages.
          ['^'],
          // Internal packages.
          ['^@/'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
  }
};
