import type { ConfigFile } from "@rtk-query/codegen-openapi";

// https://redux-toolkit.js.org/rtk-query/usage/code-generation#simple-usage
const config: ConfigFile = {
  schemaFile:
    "https://raw.githubusercontent.com/suin/esa-openapi/main/esa-api.json",
  apiFile: "./store/esaApiBase.ts",
  apiImport: "esaApiBase",
  outputFile: "./store/esaApi.ts",
  exportName: "esaApi",
  hooks: true,
};

export default config;
