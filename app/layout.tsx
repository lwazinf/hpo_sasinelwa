import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sasinelwa Training Academy | Professional Nursing Training Kimberley',
  description: 'SANC-accredited nursing training academy in Kimberley, Northern Cape. Professional healthcare education programs with experienced instructors.',
  keywords: 'nursing training, healthcare education, Kimberley, Northern Cape, SANC accredited, professional development',
  authors: [{ name: 'Sasinelwa Training Academy' }],
  creator: 'Sasinelwa Training Academy',
  publisher: 'Sasinelwa Training Academy',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sasinelwaacademy.co.za',
    languages: {
      'en': 'https://sasinelwaacademy.co.za',
      'en-ZA': 'https://sasinelwaacademy.co.za',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://sasinelwaacademy.co.za',
    siteName: 'Sasinelwa Training Academy',
    title: 'Sasinelwa Training Academy | Professional Nursing Training',
    description: 'SANC-accredited nursing training programs in Kimberley, Northern Cape',
    images: [
      {
        url: 'https://sasinelwaacademy.co.za/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sasinelwa Training Academy Campus',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasinelwa Training Academy | Nursing Training Kimberley',
    description: 'Professional healthcare training in Kimberley, Northern Cape',
    images: ['https://sasinelwaacademy.co.za/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Geo Tags */}
        <meta name="geo.position" content="-28.7471;24.6640" />
        <meta name="geo.placename" content="Kimberley, Northern Cape, South Africa" />
        <meta name="geo.region" content="ZA-NC" />
        
        {/* Additional SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sasinelwa Training Academy" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Sitemap and RSS */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}