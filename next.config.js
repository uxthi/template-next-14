const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/app/services/i18n/i18n.ts");

const nextConfig = {
  output: "standalone",
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
