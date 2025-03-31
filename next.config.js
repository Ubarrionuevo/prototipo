/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Advertencia: Esto deshabilitará la verificación de ESLint durante el build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Advertencia: Esto deshabilitará la verificación de tipos durante el build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 