/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      ["@swc-jotai/react-refresh", {}],
      ["@swc-jotai/debug-label", {}],
    ],
  },
};

module.exports = nextConfig
