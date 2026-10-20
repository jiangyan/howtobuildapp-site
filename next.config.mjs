/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    const has = [{ type: "host", value: "consensus.lens.howtobuild.app" }];
    return {
      beforeFiles: [
        { source: "/", has, destination: "/consensus-lens" },
        { source: "/policy", has, destination: "/consensus-lens/policy" },
        { source: "/terms", has, destination: "/consensus-lens/terms" },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.howtobuild.app" }],
        destination: "https://howtobuild.app/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
