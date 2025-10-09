/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://logmonitor-alb-625014836.ap-south-1.elb.amazonaws.com/:path*', // Proxy to your backend
      },
    ];
  },
};

export default nextConfig;
