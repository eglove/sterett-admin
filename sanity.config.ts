import * as process from "node:process";

import { defineConfig } from "sanity";

import schema from "./schemas/schema.ts";
import { developmentPlugins, productionPlugins } from "./util-sanity-config.ts";

export default defineConfig({
  dataset: "production",
  name: "default",
  // @ts-expect-error PluginOptions[]
  plugins:
    "development" === process.env.NODE_ENV
      ? developmentPlugins
      : productionPlugins,
  projectId: "540gjnt8",
  schema: {
    types: schema,
  },
  title: "Sterett Creek Village Trustee Admin",
});
