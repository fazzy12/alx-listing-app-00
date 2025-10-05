import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  turbopack: {
    root: '/home/ifeanyi/alx-listing-app-detail',
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   images: {
//     // Explicitly listing all domains used in your constants/sample data for Next/Image optimization
//     domains: ['example.com', 'i.pravatar.cc', 'images.unsplash.com'], 
//   },
  
//   // NOTE: The 'turbo' key has been REMOVED as it is causing the TurbopackInternalError.
//   // Running 'npm run dev -- --turbopack' is sufficient to enable Turbopack.
// };

// export default nextConfig;