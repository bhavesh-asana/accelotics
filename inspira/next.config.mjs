/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'accelite.blob.core.windows.net',
        port: '', // Leave blank for default ports
        pathname: '/static/**', // Match paths like '/static/logo-prime.png'
      },
    ],
  },
};

export default nextConfig;
