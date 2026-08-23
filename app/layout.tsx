import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
    url: 'https://vanguard-sterling.law',
    siteName: 'Vanguard & Sterling Legal Counsel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard & Sterling Legal Counsel',
    description: 'Corporate, M&A, and high-stakes trial advocacy with tier-1 nationwide recognition.',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#171717',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Vanguard & Sterling Legal Counsel',
    image: 'https://picsum.photos/seed/legal_firm_building/1200/800',
    description: 'Preeminent corporate and litigation legal practice specializing in M&A, commercial litigation, IP, white collar defense, and regulatory compliance.',
    url: 'https://vanguard-sterling.law',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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


