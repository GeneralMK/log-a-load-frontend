import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";
const schema = process.env.GRAPHQL_SCHEMA || process.env.VITE_GRAPHQL_URL;
if (!schema)
  throw new Error(
    "Set GRAPHQL_SCHEMA to your schema file or VITE_GRAPHQL_URL to your GraphQL endpoint in .env before running yarn codegen.",
  );
const config: CodegenConfig = {
  schema,
  documents: ["src/**/*.{graphql,gql}", "!src/gql/**"],
  generates: {
    "src/gql/": { preset: "client", config: { useTypeImports: true } },
  },
  ignoreNoDocuments: true,
};
export default config;
