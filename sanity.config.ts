import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "infinity-erp-editorial",
  title: "Infinity ERP Editorial",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "replace-me",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
