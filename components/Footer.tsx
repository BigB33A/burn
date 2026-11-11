'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerColumns = [
    {
      title: 'Explore',
      links: [
        { label: 'About BURNBACK', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Tokenomics', href: '#tokenomics' },
        { label: 'BurnBack Events', href: '#events' },
        { label: 'Staking', href: '#staking' },
        { label: 'Roadmap', href: '#roadmap' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Whitepaper', href: '#whitepaper' },
        { label: 'Transparency Dashboard', href: '#transparency' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Audit Report', href: '#audit' },
        { label: 'Token Contract', href: '#contract' },
        { label: 'Press Kit', href: '#press' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Twitter / X', href: 'https://x.com' },
        { label: 'Telegram', href: 'https://telegram.org' },
        { label: 'Discord', href: 'https://discord.com' },
        { label: 'Reddit', href: 'https://reddit.com' },
        { label: 'Medium', href: 'https://medium.com' },
        { label: 'GitHub', href: 'https://github.com' },
      ],
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#071A15',
        borderTop: '1px solid rgba(24, 166, 106, 0.15)',
      }}
    >
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Col 1: Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ width: '36px', height: '36px' }}>
              <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="19" cy="19" r="19" fill="#092B20" />
                <rect x="17.5" y="24" width="3" height="6" rx="1" fill="#18A66A" />
                <polygon points="19,8 27,24 11,24" fill="#18A66A" />
                <polygon points="19,12 24,22 14,22" fill="#0E7A4E" />
                <path d="M13 18 Q10 10 19 8 Q28 10 25 18" stroke="#F47A35" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1.2" fill="#F47A35" opacity="0.7" />
                <circle cx="26" cy="16" r="1.2" fill="#F47A35" opacity="0.7" />
                <circle cx="19" cy="6" r="1.5" fill="#F47A35" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: '1.1875rem',
                color: '#F4F5EF',
                letterSpacing: '0.05em',
              }}
            >
              BURN<span style={{ color: '#18A66A' }}>BACK</span>
            </span>
          </div>

          {/* Mission statement */}
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#A4B2A9',
              lineHeight: 1.7,
              margin: '0 0 1.5rem',
              maxWidth: '240px',
            }}
          >
            Turning every crypto transaction into a force for environmental good. We burn tokens.
            Not trees.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: '𝕏', label: 'Twitter', href: '#' },
              { icon: '✈', label: 'Telegram', href: '#' },
              { icon: '💬', label: 'Discord', href: '#' },
              { icon: '📰', label: 'Medium', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(24, 166, 106, 0.08)',
                  border: '1px solid rgba(24, 166, 106, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9375rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  color: '#A4B2A9',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(24, 166, 106, 0.2)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#18A66A';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#18A66A';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(24, 166, 106, 0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(24, 166, 106, 0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#A4B2A9';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '0.8125rem',
                color: '#F4F5EF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                margin: '0 0 1.25rem',
              }}
            >
              {col.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#A4B2A9',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#18A66A';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#A4B2A9';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          borderTop: '1px solid rgba(24, 166, 106, 0.1)',
        }}
      />

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1.5rem 1.5rem 2rem',
        }}
      >
        {/* Copyright + legal links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.8125rem',
              color: '#A4B2A9',
            }}
          >
            © {currentYear ?? ''} BURNBACK. All rights reserved. $BURN is not registered as a security
            in any jurisdiction.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Risk Disclosure'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.8125rem',
                  color: '#A4B2A9',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#F4F5EF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#A4B2A9'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Risk disclosure */}
        <div
          style={{
            backgroundColor: 'rgba(244, 122, 53, 0.04)',
            border: '1px solid rgba(244, 122, 53, 0.1)',
            borderRadius: '0.625rem',
            padding: '1rem 1.25rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.75rem',
              color: '#A4B2A9',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <span style={{ color: '#F47A35', fontWeight: 600 }}>⚠️ Risk Disclosure:</span>{' '}
            Cryptocurrencies are highly volatile assets. The value of $BURN can go up or down
            significantly and you may lose all of your investment. This website does not constitute
            financial, legal, or investment advice. BURNBACK is not responsible for any losses
            incurred from purchasing, selling, or holding $BURN tokens. Always conduct your own
            research (DYOR) before participating. Past performance is not indicative of future
            results. Only invest what you can afford to lose. This project is experimental and
            carries all the risks associated with early-stage cryptocurrency projects.
          </p>
        </div>

        {/* Built on Solana */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
            opacity: 0.6,
          }}
        >
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#A4B2A9' }}>
            Built on
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading), sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #9945FF 0%, #14F195 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Solana
          </span>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#A4B2A9' }}>
            | Powered by community
          </span>
        </div>
      </div>
    </footer>
  );
}
