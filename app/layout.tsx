import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import DemoAdminButton from '@/components/DemoAdminButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://trades.connecteire.ie'),
  title: {
    default: "O'Brien Plumbing & Heating | 24/7 Emergency Plumber Cork",
    template: "%s | O'Brien Plumbing & Heating",
  },
  description: "Trusted local plumber in Cork. 24/7 emergency call-outs, boiler servicing, bathroom installations, and all plumbing repairs. RGII registered. Free quotes.",
  keywords: ['plumber cork', 'emergency plumber', 'boiler service cork', '24 hour plumber', 'bathroom installation', 'heating engineer cork'],
  authors: [{ name: "O'Brien Plumbing & Heating" }],
  creator: 'Connecteire',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://trades.connecteire.ie',
    siteName: "O'Brien Plumbing & Heating",
    title: "O'Brien Plumbing & Heating | Your Trusted Local Plumber",
    description: "Professional plumbing services in Cork. Available 24/7 for emergencies. RGII registered with 15+ years experience.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'Brien Plumbing & Heating | 24/7 Emergency Plumber",
    description: "Trusted local plumber in Cork. 24/7 emergency call-outs. RGII registered.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Plumber',
              name: "O'Brien Plumbing & Heating",
              image: 'https://trades.connecteire.ie/images/og-image.jpg',
              '@id': 'https://trades.connecteire.ie',
              url: 'https://trades.connecteire.ie',
              telephone: '+353-21-123-4567',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '15 Industrial Estate',
                addressLocality: 'Ballincollig',
                addressRegion: 'Cork',
                postalCode: 'P31 AB12',
                addressCountry: 'IE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.8897,
                longitude: -8.5862,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/obrienplumbing',
              ],
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 51.8969,
                  longitude: -8.4863,
                },
                geoRadius: '30000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Plumbing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Emergency Plumbing',
                      description: '24/7 emergency call-outs for burst pipes, leaks, and plumbing emergencies',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Boiler Service & Repair',
                      description: 'Annual servicing, breakdown repairs, and new boiler installations',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bathroom Installation',
                      description: 'Full bathroom renovations and installations',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <DemoAdminButton />
      </body>
    </html>
  )
}
