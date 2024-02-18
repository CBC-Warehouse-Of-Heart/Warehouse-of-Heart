const withNextIntl = require("next-intl/plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer(
  withNextIntl("./lib/i18n.ts")({
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          hostname: "woh-cdn.coachbychamp.com",
        },
      ],
    },
    redirects: async () => {
      return [
        {
          source: "/img/:path*",
          destination: "https://woh-cdn.coachbychamp.com/img/:path*",
          permanent: true,
        },
        {
          source: "/postcards/:path*",
          destination: "https://woh-cdn.coachbychamp.com/postcards/:path*",
          permanent: true,
        },
        {
          source: "/sound/:path*",
          destination: "https://woh-cdn.coachbychamp.com/sound/:path*",
          permanent: true,
        },
      ];
    },
  }),
);

module.exports = nextConfig;