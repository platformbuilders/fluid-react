module.exports = {
  extends: '@platformbuilders/eslint-config-builders',
  overrides: [{
    files: "**/*.+(ts|tsx|js)",
    rules: {
      "react/react-in-jsx-scope": 0
    }
  }]
};
