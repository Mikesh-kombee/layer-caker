import {
  partytownSnippet,
} from "@qwik.dev/partytown/integration";

export const partytownConfig = {
  debug: process.env.NODE_ENV === "development",
  forward: [
    // Sanity Studio scripts
    "sanity",
    "sanityClient",
    "sanityConfig",
    "sanityAnalytics",
    "sanityTracking",

    // Google Tag Manager
    "dataLayer",
    "gtm",
    "gtag",
    "googletagmanager",

    // Analytics and Tracking
    "analytics",
    "tracking",
    "fbq",
    "fb",
    "facebook",

    // Other third-party scripts
    "dataLayer.push",
    "window.dataLayer",
    "window.gtag",
    "window.fbq",
  ],
  resolveUrl: (url: URL) => {
    if (url.pathname.includes("gtm")) {
      return new URL("https://www.googletagmanager.com" + url.pathname);
    }
    return url;
  },
};

export const partytownScript = partytownSnippet(partytownConfig);
