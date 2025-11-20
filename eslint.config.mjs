import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
