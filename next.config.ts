import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// export default nextConfig;
export default withMDX(nextConfig)