import globals from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "never"], // Enforce no semicolons
      indent: ["error", 2], // Enforce consistent 2-space indentation
      "no-trailing-spaces": ["error"], // Disallow trailing spaces
      "no-multiple-empty-lines": ["error", { max: 1 }], // Disallow multiple empty lines (max: 1)
      "object-curly-spacing": ["error", "always"], // Enforce one space inside curly braces
    },
  },
]
