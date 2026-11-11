'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { STAKING_TIERS } from '@/lib/constants';

export default function StakingSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="staking"
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
              backgroundColor: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#A855F7', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Staking
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
            Hold. Stake. Become Phoenix.
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
            Stake your $BURN to earn staking rewards, gain governance voting power, and unlock
            exclusive real-world impact perks. Four tiers. Four levels of commitment.
          </p>
        </div>

        {/* Tier cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {STAKING_TIERS.map((tier, i) => (
            <div
              key={tier.id}
              style={{
                backgroundColor: tier.featured ? tier.bg : '#092B20',
                borderRadius: '1.25rem',
                border: `1px solid ${tier.accent}${tier.featured ? '60' : '30'}`,
                padding: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: tier.featured ? `0 0 40px ${tier.accent}20` : 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
            >
              {/* Glow effect for Phoenix */}
              {tier.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle at 50% 30%, ${tier.accent}10 0%, transparent 60%)`,
                    pointerEvents: 'none',
                  }}
                />
              )}

              {/* Badge */}
              {tier.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: tier.accent,
                    borderRadius: '100px',
                    padding: '0.25rem 0.625rem',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.03em',
                  }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier name */}
              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: tier.accent,
                    marginBottom: '0.375rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {tier.name}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: `${tier.accent}15`,
                    border: `1px solid ${tier.accent}30`,
                    borderRadius: '0.375rem',
                    padding: '0.25rem 0.625rem',
                    fontFamily: 'var(--font-mono-custom), monospace',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: tier.accent,
                  }}
                >
                  {tier.amount}
                </div>
              </div>

              {/* Duration */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.875rem',
                  color: '#A4B2A9',
                }}
              >
                <span>⏱</span>
                <span>{tier.duration} lock-up</span>
              </div>

              {/* Perks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {tier.perks.map((perk) => (
                  <div
                    key={perk}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '0.8125rem',
                      color: '#F4F5EF',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: tier.accent, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <button
                style={{
                  width: '100%',
                  background: tier.featured
                    ? `linear-gradient(135deg, ${tier.accent} 0%, #6366f1 100%)`
                    : 'transparent',
                  border: `1px solid ${tier.accent}60`,
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.625rem',
                  color: tier.featured ? '#fff' : tier.accent,
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!tier.featured) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = `${tier.accent}15`;
                  }
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  if (!tier.featured) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  }
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                Stake as {tier.name}
              </button>

              {/* Coming soon note */}
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.6875rem',
                  color: '#A4B2A9',
                  textAlign: 'center',
                  margin: '0.75rem 0 0',
                  fontStyle: 'italic',
                }}
              >
                Staking coming soon — availability TBA
              </p>
            </div>
          ))}
        </div>

        {/* NFT Certificate highlight card */}
        <div
          style={{
            backgroundColor: '#092B20',
            borderRadius: '1.5rem',
            border: '1px solid rgba(24, 166, 106, 0.2)',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.5s',
          }}
        >
          {/* Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(24, 166, 106, 0.1)',
                border: '1px solid rgba(24, 166, 106, 0.25)',
                borderRadius: '100px',
                padding: '0.3rem 0.875rem',
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#18A66A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                NFT Impact Certificates
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 800,
                fontSize: '1.75rem',
                color: '#F4F5EF',
                margin: '0 0 1rem',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              Your Tokens. Your Tree. Your Impact.
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.9375rem',
                color: '#A4B2A9',
                lineHeight: 1.7,
                margin: '0 0 1.25rem',
              }}
            >
              Once the NFT certificate system is live, eligible holders will be able to claim
              on-chain certificates linked to specific planted trees — complete with GPS
              coordinates, species data, and satellite verification imagery.
            </p>
            <div
              style={{
                padding: '0.875rem 1.125rem',
                backgroundColor: 'rgba(24, 166, 106, 0.08)',
                border: '1px solid rgba(24, 166, 106, 0.2)',
                borderRadius: '0.625rem',
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.875rem',
                color: '#A4B2A9',
              }}
            >
              <span style={{ color: '#18A66A', fontWeight: 600 }}>Eligibility:</span> Minimum
              10,000 $BURN held. Subject to system being operational. Exact terms TBA.
            </div>
          </div>

          {/* Sample certificate */}
          <div
            style={{
              backgroundColor: '#071A15',
              borderRadius: '1rem',
              border: '1px solid rgba(24, 166, 106, 0.3)',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              maxWidth: '340px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            {/* Certificate header */}
            <div
              style={{
                borderBottom: '1px solid rgba(24, 166, 106, 0.2)',
                paddingBottom: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 800, fontSize: '0.875rem', color: '#F4F5EF', letterSpacing: '0.05em' }}>
                    BURNBACK IMPACT
                  </div>
                  <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#18A66A' }}>
                    Certificate of Restoration
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem' }}>🌳</div>
              </div>
            </div>

            {/* Certificate details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              {[
                { label: 'Tree ID', value: '#---' },
                { label: 'Species', value: 'TBD' },
                { label: 'GPS', value: '0°00\'00"N, 0°00\'00"E' },
                { label: 'Planted', value: 'Awaiting Event' },
                { label: 'Verifier', value: 'NGO Partner TBD' },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9' }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono-custom), monospace', fontSize: '0.6875rem', color: '#F4F5EF' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                borderTop: '1px solid rgba(24, 166, 106, 0.2)',
                paddingTop: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9' }}>
                On-Chain: Solana
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontSize: '0.6875rem',
                  color: '#F47A35',
                  backgroundColor: 'rgba(244, 122, 53, 0.1)',
                  padding: '0.125rem 0.5rem',
                  borderRadius: '100px',
                }}
              >
                Sample / Not Yet Live
              </span>
            </div>

            {/* Watermark */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-30deg)',
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 800,
                fontSize: '2.5rem',
                color: 'rgba(24, 166, 106, 0.04)',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              BURNBACK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
