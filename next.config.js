/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        memoryLimit: 1073741824, // Example: 1GB (in bytes)
      },
};

module.exports = nextConfig;
