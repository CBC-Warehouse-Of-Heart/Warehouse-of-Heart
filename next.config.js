const withNextIntl = require("next-intl/plugin");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl("./lib/i18n.ts")({});

module.exports = nextConfig;