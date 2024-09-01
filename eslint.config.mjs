import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const config = [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

console.log("config", config);
export default config;
