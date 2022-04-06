import type { ConfigFile } from "@rtk-query/codegen-openapi";

// https://redux-toolkit.js.org/rtk-query/usage/code-generation#simple-usage
const config: ConfigFile = {
  schemaFile: "https://petstore3.swagger.io/api/v3/openapi.json",
  apiFile: "./store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./store/petApi.ts",
  exportName: "petApi",
  hooks: true,
};

export default config;
