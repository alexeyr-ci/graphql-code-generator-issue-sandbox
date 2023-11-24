import { CodegenConfig } from "@graphql-codegen/cli";
import type { ReactApolloRawPluginConfig } from '@graphql-codegen/typescript-react-apollo/typings/config';

const apolloConfig: ReactApolloRawPluginConfig = {};

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations"] },
  },
};

export default config;
