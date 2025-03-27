const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Edge Runtimeを使用するページのみに設定
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
  // ポート設定を追加
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    };
    return config;
  },
  // Cloudflare Pages用の設定
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig; 