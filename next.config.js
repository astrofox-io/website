module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.{js|jsx|ts|tsx}$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
