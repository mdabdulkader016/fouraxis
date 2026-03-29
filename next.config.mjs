/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "images.unsplash.com",
      "api.dicebear.com",
      "cdn.worldvectorlogo.com",
      "cdn.jsdelivr.net"
    ],
  },
};

export default nextConfig;
