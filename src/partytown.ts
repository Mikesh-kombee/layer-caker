import { partytownSnippet } from "@builder.io/partytown/integration";

export const partytownConfig = {
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

    // Next.js related
    "next",
    "next/router",
    "next/script",

    // Styled Components
    "styled-components",
    "styled",

    // Dayjs
    "dayjs",

    // Image handling
    "next/image",
    "@sanity/image-url",
  ],
};

export const partytownScript = partytownSnippet(partytownConfig);
