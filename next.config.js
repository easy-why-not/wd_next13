const { join } = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  env: {
    public_api: 'http://10.226.38.149:8001/api'
  }
};

module.exports = nextConfig;
