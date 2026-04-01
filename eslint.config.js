import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
export default defineConfig(stylistic.configs.recommended, [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@stylistic/brace-style": ["error", "stroustrup"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
    },
  },
]);
