module.exports = {
  extends       : ["next", "turbo", "airbnb", "airbnb-typescript", "prettier"],
  parser        : '@typescript-eslint/parser',
  ignorePatterns: ["dist"],
  parserOptions : {
    project: "./tsconfig.json",
  },
  rules: {
    "react/function-component-definition": "off",
    "react/button-has-type"              : "off",
    "@next/next/no-html-link-for-pages"  : "off",
    "react/jsx-key"                      : "off",
    "react/jsx-uses-react"               : "off",
    "react/react-in-jsx-scope"           : "off",
    "import/prefer-default-export˘"      : "off",
    "import/prefer-default-export"       : "off",
    "react/jsx-props-no-spreading"       : "off",
    "no-unneeded-ternary"                : "off",
    "jsx-a11y/anchor-is-valid"           : [
      "error",
      {
        "components" : ["Link"],
        "specialLink": ["to"],
        "aspects"    : ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "jsx-quotes"                       : ["error", "prefer-single"],
    "react/jsx-no-useless-fragment"    : "error",
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props"      : "off",
    "react/sort-prop-types"            : "error",
    "arrow-parens"                     : ["error", "always"],
    "curly"                            : ["error", "all"],
    "global-require"                   : "off",
    "import/no-dynamic-require"        : "off",
    "max-len"                : ["warn", 120],
    "no-console"             : ["error", { "allow": ["warn", "error", "info"] }],
    "no-multiple-empty-lines": [
      "error",
      { "max": 1, "maxBOF": 0, "maxEOF": 0 }
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-shadow"                      : ["error", { "hoist": "never", "allow": ["resolve"] }],
    "object-curly-newline"           : "off",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "yoda"                             : "off",
    "import/no-extraneous-dependencies": "off",
    "no-useless-escape"                : "off",
    "react/prop-types"                 : "off",
    "import/no-unresolved"             : "off",
    "import/no-named-as-default"       : "off",
    "indent"                           : [2],
    "react/jsx-indent"                 : [2],
    "react/jsx-indent-props"           : 0,
    "react/jsx-filename-extension"     : [
      2,
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "key-spacing": [
      2,
      {
        "align"      : "colon",
        "afterColon" : true,
        "beforeColon": false
      }
    ],
    "import/extensions": 0
  },
};
