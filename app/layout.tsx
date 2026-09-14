import type { Metadata, Viewport } from 'next';
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif-title',
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://legal-counsel-indol.vercel.app'),
  title: 'Vanguard & Sterling Legal Counsel | Corporate, M&A & Trial Advocates',
  description: 'Preeminent corporate and litigation legal practice. Delivering strategic counsel across Mergers & Acquisitions, High-Stakes Litigation, Intellectual Property, Regulatory Defense, and Capital Restructuring.',
  keywords: [
    'Corporate Law Firm',
    'Commercial Litigation Counsel',
    'Mergers and Acquisitions Lawyers',
    'Intellectual Property Litigation',
    'White Collar Defense',
    'Regulatory Compliance Attorneys',
    'Trial Lawyers',
    'Legal Retainer Estimator',
  ],
  authors: [{ name: 'Vanguard & Sterling Legal Counsel' }],
  openGraph: {
    title: 'Vanguard & Sterling Legal Counsel | Corporate & Trial Advocates',
    description: 'Relentless advocacy, disciplined legal counsel, and over $1.8B in successful trial verdicts and closed transactions.',
    type: 'website',
    url: 'https://legal-counsel-indol.vercel.app',
    siteName: 'Vanguard & Sterling Legal Counsel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard & Sterling Legal Counsel',
    description: 'Corporate, M&A, and high-stakes trial advocacy with tier-1 nationwide recognition.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#171717',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Vanguard & Sterling Legal Counsel',
    image: 'https://picsum.photos/seed/legal_firm_building/1200/800',
    description: 'Preeminent corporate and litigation legal practice specializing in M&A, commercial litigation, IP, white collar defense, and regulatory compliance.',
    url: 'https://legal-counsel-indol.vercel.app',
    telephone: '+1-800-555-8373',
    email: 'counsel@vanguard-sterling.law',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 Financial District Plaza, 38th Floor',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10005',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${cinzel.variable} ${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-[#171717] selection:bg-[#171717] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


