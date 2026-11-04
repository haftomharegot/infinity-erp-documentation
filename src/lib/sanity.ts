import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export const sanityConfigured = Boolean(
  projectId && projectId !== "replace-with-your-sanity-project-id",
);

export const sanityClient = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;
