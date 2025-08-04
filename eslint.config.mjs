import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  jest.configs["flat/recommended"],
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2024,
      sourceType: "module",
    },
    plugins: {
      jest,
    },
  },
];
