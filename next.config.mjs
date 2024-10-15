/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'autosubmit-gui.readthedocs.io',
        port: '',
        pathname: '/en/latest/_static/**',
      },
    ],
  },
};

export default nextConfig;
