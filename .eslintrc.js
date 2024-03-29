module.exports = {
  extends: [
    "@platformbuilders/eslint-config-builders/react",
    "plugin:storybook/recommended"
  ],
  overrides: [{
    files: "**/*.+(ts|tsx|js)",
    rules: {
      "react/react-in-jsx-scope": 0
    }
  }]
};
