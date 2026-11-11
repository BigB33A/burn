'use client';

import { useIntersection } from '@/hooks/useIntersection';

export default function TransparencySection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const checklistItems = [
    {
      icon: '⛓',
      title: 'On-Chain Transactions',
      description: 'Every BurnBack Fund deployment and token burn is recorded as a verifiable on-chain transaction on Solana.',
    },
    {
      icon: '🔐',
      title: 'Multi-Sig Wallet',
      description: 'The BurnBack Fund is held in a multi-signature wallet requiring multiple keyholders to authorize any disbursement.',
    },
    {
      icon: '🛰',
      title: 'GPS + Satellite Verification',
      description: 'Each planted tree\'s location is documented with precise GPS coordinates and confirmed via satellite imagery.',
    },
    {
      icon: '📋',
      title: 'NGO Documentation',
      description: 'All planting events are signed off by verified NGO partners who provide official documentation for each event.',
    },
  ];

  return (
    <section
      id="transparency"
      style={{
        backgroundColor: '#071A15',
        padding: '5rem 1.5rem',
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(24, 166, 106, 0.08)',
              border: '1px solid rgba(24, 166, 106, 0.2)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#18A66A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Transparency
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#F4F5EF',
              lineHeight: 1.15,
              margin: '0 0 1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Proof, Not Promises.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '1.0625rem',
              color: '#A4B2A9',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Environmental impact is only real if it can be verified. BURNBACK is built from the
            ground up with full on-chain and off-chain transparency.
          </p>
        </div>

        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Checklist */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            {checklistItems.map((item, i) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#092B20',
                  borderRadius: '0.875rem',
                  border: '1px solid rgba(24, 166, 106, 0.1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(24, 166, 106, 0.1)',
                    border: '1px solid rgba(24, 166, 106, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading), sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#F4F5EF',
                      margin: '0 0 0.375rem',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '0.875rem',
                      color: '#A4B2A9',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dashboard preview */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            <div
              style={{
                backgroundColor: '#092B20',
                borderRadius: '1.25rem',
                border: '1px solid rgba(24, 166, 106, 0.2)',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Dashboard header bar */}
              <div
                style={{
                  backgroundColor: '#071A15',
                  borderBottom: '1px solid rgba(24, 166, 106, 0.15)',
                  padding: '0.875rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#18A66A' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono-custom), monospace', fontSize: '0.75rem', color: '#A4B2A9', marginLeft: '0.5rem' }}>
                  burnback.io/dashboard
                </span>
              </div>

              {/* Tabs */}
              <div
                style={{
                  borderBottom: '1px solid rgba(24, 166, 106, 0.1)',
                  padding: '0 1.25rem',
                  display: 'flex',
                  gap: '0',
                }}
              >
                {['Overview', 'Events', 'Transactions', 'Trees'].map((tab, i) => (
                  <div
                    key={tab}
                    style={{
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '0.8125rem',
                      color: i === 0 ? '#18A66A' : '#A4B2A9',
                      borderBottom: i === 0 ? '2px solid #18A66A' : '2px solid transparent',
                      cursor: 'pointer',
                      fontWeight: i === 0 ? 600 : 400,
                    }}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              {/* Dashboard content */}
              <div style={{ padding: '1.25rem' }}>
                {/* Stats row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {[
                    { label: 'Total Burned', value: '—' },
                    { label: 'Trees Planted', value: '—' },
                    { label: 'Events Run', value: '0' },
                    { label: 'Fund Balance', value: 'TBD' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        backgroundColor: '#071A15',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(24, 166, 106, 0.1)',
                        padding: '0.75rem',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9', marginBottom: '0.25rem' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: '1.125rem', color: '#F4F5EF' }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Data rows */}
                <div
                  style={{
                    backgroundColor: '#071A15',
                    borderRadius: '0.625rem',
                    border: '1px solid rgba(24, 166, 106, 0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      padding: '0.625rem 1rem',
                      borderBottom: '1px solid rgba(24, 166, 106, 0.08)',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: '0.5rem',
                    }}
                  >
                    {['Event', 'Date', 'Status'].map((h) => (
                      <span key={h} style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                  <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌱</div>
                    <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8125rem', color: '#A4B2A9', margin: 0, fontStyle: 'italic' }}>
                      Data will appear after the first BurnBack Event
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA below dashboard */}
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(24, 166, 106, 0.4)',
                  cursor: 'not-allowed',
                  padding: '0.875rem 2rem',
                  borderRadius: '0.625rem',
                  color: '#A4B2A9',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                disabled
                title="Coming after first event"
              >
                <span>🔒</span>
                Explore Live Dashboard
                <span style={{ fontSize: '0.75rem', backgroundColor: 'rgba(164, 178, 169, 0.1)', padding: '0.125rem 0.5rem', borderRadius: '100px' }}>
                  Coming Soon
                </span>
              </button>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#A4B2A9', marginTop: '0.75rem', fontStyle: 'italic' }}>
                All stats and records shown will reflect actual verified events only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
