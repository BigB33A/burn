'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(7, 26, 21, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(24, 166, 106, 0.2)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
              {/* Circular background */}
              <circle cx="19" cy="19" r="19" fill="#092B20" />
              {/* Tree trunk */}
              <rect x="17.5" y="24" width="3" height="6" rx="1" fill="#18A66A" />
              {/* Tree body */}
              <polygon points="19,8 27,24 11,24" fill="#18A66A" />
              {/* Inner lighter triangle */}
              <polygon points="19,12 24,22 14,22" fill="#0E7A4E" />
              {/* Phoenix flame arc top */}
              <path
                d="M13 18 Q10 10 19 8 Q28 10 25 18"
                stroke="#F47A35"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Flame sparks */}
              <circle cx="12" cy="16" r="1.2" fill="#F47A35" opacity="0.7" />
              <circle cx="26" cy="16" r="1.2" fill="#F47A35" opacity="0.7" />
              <circle cx="19" cy="6" r="1.5" fill="#F47A35" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: '#F4F5EF',
              letterSpacing: '0.05em',
            }}
          >
            BURN<span style={{ color: '#18A66A' }}>BACK</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0.875rem',
                borderRadius: '0.5rem',
                color: '#A4B2A9',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = '#F4F5EF';
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(24, 166, 106, 0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = '#A4B2A9';
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side actions */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          className="hidden md:flex"
        >
          <button
            style={{
              background: 'none',
              border: '1px solid rgba(164, 178, 169, 0.4)',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              color: '#A4B2A9',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#18A66A';
              (e.currentTarget as HTMLButtonElement).style.color = '#18A66A';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(164, 178, 169, 0.4)';
              (e.currentTarget as HTMLButtonElement).style.color = '#A4B2A9';
            }}
          >
            Dashboard
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid #18A66A',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              color: '#18A66A',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(24, 166, 106, 0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
            }}
          >
            Connect Wallet
          </button>
          <button
            style={{
              background: 'linear-gradient(135deg, #F47A35 0%, #18A66A 100%)',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.5rem',
              color: '#fff',
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              transition: 'opacity 0.2s ease, transform 0.1s ease',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = '1';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
            }}
          >
            Buy $BURN
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#F4F5EF',
          }}
          className="flex md:hidden"
          aria-label="Toggle mobile menu"
        >
          <div style={{ width: '24px', height: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span
              style={{
                display: 'block',
                height: '2px',
                backgroundColor: '#F4F5EF',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transformOrigin: 'center',
                transform: mobileOpen ? 'rotate(45deg) translateY(9px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                backgroundColor: '#F4F5EF',
                transition: 'opacity 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                backgroundColor: '#F4F5EF',
                transition: 'transform 0.3s ease',
                transformOrigin: 'center',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-9px)' : 'none',
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: mobileOpen ? '500px' : '0',
          transition: 'max-height 0.4s ease',
          backgroundColor: 'rgba(7, 26, 21, 0.98)',
          borderTop: mobileOpen ? '1px solid rgba(24, 166, 106, 0.2)' : 'none',
        }}
        className="md:hidden"
      >
        <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                color: '#A4B2A9',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(164, 178, 169, 0.1)',
                width: '100%',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
            <button
              style={{
                background: 'none',
                border: '1px solid #18A66A',
                cursor: 'pointer',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                color: '#18A66A',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 500,
              }}
            >
              Connect Wallet
            </button>
            <button
              style={{
                background: 'linear-gradient(135deg, #F47A35 0%, #18A66A 100%)',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                color: '#fff',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 700,
              }}
            >
              Buy $BURN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
