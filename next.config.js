/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
  
    ignoreBuildErrors: true,
  },
  eslint: {
   
    ignoreDuringBuilds: true,
  },
  rewrites:()=>{
    return [
      {
        source:'/',
        destination:'http://localhost:3000'
      }
    ]
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SERVER_PORT: 5000,
    SOCKET_REDIS: false,
    REDIS_URL: "redis://localhost:6379",
  },
};

module.exports = nextConfig;


