import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/settings/',
        '/dashboard/errors/',
        '/api/',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
