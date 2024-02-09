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
          hostname: "warehouse-of-heart-static.s3.ap-southeast-1.amazonaws.com",
        },
      ],
    },
    redirects: async () => {
      return [
        {
          source: "/img/:path*",
          destination:
            "https://warehouse-of-heart-static.s3.ap-southeast-1.amazonaws.com/img/:path*",
          permanent: true,
        },
        {
          source: "/postcards/:path*",
          destination:
            "https://warehouse-of-heart-static.s3.ap-southeast-1.amazonaws.com/postcards/:path*",
          permanent: true,
        },
        {
          source: "/sound/:path*",
          destination:
            "https://warehouse-of-heart-static.s3.ap-southeast-1.amazonaws.com/sound/:path*",
          permanent: true,
        },
      ];
    },
  }),
);

module.exports = nextConfig;
