import { partytownSnippet } from "@builder.io/partytown/integration";

export const partytownConfig = {
  forward: [
    // Sanity Studio scripts
    "sanity",
    "sanityClient",
    "sanityConfig",
    "sanityAnalytics",
    "sanityTracking",
    // Add any third-party scripts you want to run in the web worker
    // Example: 'dataLayer.push',
    // 'gtag',
    // 'fbq',
  ],
};

export const partytownScript = partytownSnippet(partytownConfig);
