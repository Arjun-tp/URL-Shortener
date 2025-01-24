import globals from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "never"], // Enforce no semicolons
      // Enforce consistent 2-space indentation
      indent: ["error", 2]
    },
  },
]
