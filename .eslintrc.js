module.exports = {
    // ... other ESLint config options ...
    parser: '@babel/eslint-parser',
    // "requireConfigFile": false,
     "rules": {
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        'no-unused-vars': 'off'
    },
  };