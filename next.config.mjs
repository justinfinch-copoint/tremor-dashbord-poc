/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/presidents/overview",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
