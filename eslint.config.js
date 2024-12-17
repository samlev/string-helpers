import eslint from "@eslint/js";
import tslint from "typescript-eslint";

export default tslint.config(
  { ignores: ["dist/**/*"] },
  { files: ["src/**/*.ts"] },
  eslint.configs.recommended,
  tslint.configs.recommended,
);
