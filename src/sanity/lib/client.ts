import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Enable CDN caching in production
  useCdn: process.env.NODE_ENV === "production",
  // Add perspective for better performance
  perspective:
    process.env.NODE_ENV === "development" ? "previewDrafts" : "published",
});
