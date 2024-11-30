import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"api.auctionx.dev"
      },
      {
        protocol:"https",
        hostname:"gvauction.auctionx.dev"
      }
    ]
  }
};

export default nextConfig;
