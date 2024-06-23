/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const specificUrls = [
      'angles',
      'vocabulary',
      'circles',
      'core_skills',
      'dealing_with_data',
      'fractions_and_decimals',
      'inequalities',
      'lines',
      'percentages',
      'powers_and_roots',
      'proportion',
      'quadratics',
      'sequences',
      'shapes_and_geometry',
      'triangles',
      'compound_units'
    ];

    const redirects = specificUrls.map((url) => ({
      source: `/topics/${url}`,
      destination: `/topics#${url}`,
      permanent: true,
    }));

    return redirects;
  },
};

export default nextConfig;
