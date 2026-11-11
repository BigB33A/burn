import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono-custom',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BURNBACK | We Burn Tokens. Not Trees.',
  description:
    'BURNBACK ($BURN) is a Solana-based environmental restoration project. Every transaction permanently burns tokens and funds real-world tree planting events verified on-chain.',
  keywords: [
    '$BURN',
    'BURNBACK',
    'environmental crypto',
    'Solana token',
    'tree planting',
    'DeFi',
    'green crypto',
    'token burn',
    'forest restoration',
    'environmental blockchain',
  ],
  openGraph: {
    title: 'BURNBACK | We Burn Tokens. Not Trees.',
    description:
      'Every $BURN transaction funds verified forest restoration. Trade. Burn. Plant. Repeat.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BURNBACK | We Burn Tokens. Not Trees.',
    description:
      'Every $BURN transaction funds verified forest restoration. Trade. Burn. Plant. Repeat.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body
        className="antialiased"
        style={{
          backgroundColor: '#071A15',
          color: '#F4F5EF',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
