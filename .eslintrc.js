module.exports = {
  env: {
    "jest/globals": true,
  },
  root: true,
  extends: [
    "@react-native-community",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "prettier", "jest"],
  parser: "@typescript-eslint/parser",
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: ["error", "last"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "react/require-default-props": ["error"],
    "react/default-props-match-prop-types": ["error"],
    "react/sort-prop-types": ["error"],
    prettier: [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
};
