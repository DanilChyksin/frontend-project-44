import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
export default defineConfig(stylistic.configs.recommended, [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/singleQuote": ["error", "always"],
    },
  },
]);
