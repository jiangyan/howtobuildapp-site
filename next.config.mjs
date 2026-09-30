/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
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
