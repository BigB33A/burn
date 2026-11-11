'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { useCountdown } from '@/hooks/useCountdown';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
      <div
        style={{
          backgroundColor: 'rgba(7, 26, 21, 0.8)',
          border: '1px solid rgba(24, 166, 106, 0.3)',
          borderRadius: '0.625rem',
          padding: '0.75rem 1.25rem',
          fontFamily: 'var(--font-mono-custom), Space Mono, monospace',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: '#18A66A',
          lineHeight: 1,
          minWidth: '80px',
          textAlign: 'center',
          letterSpacing: '0.05em',
        }}
      >
        {display}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontSize: '0.6875rem',
          color: '#A4B2A9',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function BurnbackEventsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      id="events"
      style={{
        backgroundColor: '#092B20',
        padding: '5rem 1.5rem',
        borderTop: '1px solid rgba(24, 166, 106, 0.1)',
        borderBottom: '1px solid rgba(24, 166, 106, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(24, 166, 106, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(244, 122, 53, 0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}
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
              backgroundColor: 'rgba(244, 122, 53, 0.1)',
              border: '1px solid rgba(244, 122, 53, 0.3)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#F47A35',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 1.5s ease-in-out infinite alternate',
              }}
            />
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#F47A35', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Upcoming
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
            One Planet. One Mission. Every Month.
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
            On the 1st of every month at 18:00 UTC, the BurnBack Fund is deployed to plant real
            trees in verified deforested regions. Every event is documented. Every tree is proven.
          </p>
        </div>

        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Details */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: '#F4F5EF',
                margin: '0 0 1.25rem',
              }}
            >
              Event #001 — Coming Soon
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: '0.9375rem',
                color: '#A4B2A9',
                lineHeight: 1.7,
                margin: '0 0 1.5rem',
              }}
            >
              The first BurnBack Event will mark the beginning of BURNBACK's environmental mission.
              Tokens collected in the BurnBack Fund will be deployed to fund verified tree planting
              with NGO partners. Full documentation will be published on-chain.
            </p>

            {/* Event detail list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: '📅', label: 'Date', value: 'Next 1st of Month, 18:00 UTC' },
                { icon: '🔥', label: 'Planned Burn', value: 'TBD — based on fund balance' },
                { icon: '🌳', label: 'Trees Target', value: 'TBD — announced pre-event' },
                { icon: '📍', label: 'Location', value: 'TBD — Amazon / Congo / Global' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    backgroundColor: 'rgba(7, 26, 21, 0.5)',
                    borderRadius: '0.625rem',
                    border: '1px solid rgba(24, 166, 106, 0.1)',
                  }}
                >
                  <span style={{ fontSize: '1.125rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#18A66A', fontWeight: 600, marginBottom: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.9375rem', color: '#F4F5EF' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous events note */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: 'rgba(164, 178, 169, 0.05)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(164, 178, 169, 0.1)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8125rem', color: '#A4B2A9', margin: 0, fontStyle: 'italic' }}>
                📋 No previous events yet — this is the beginning. All future events will be fully
                documented and verifiable.
              </p>
            </div>
          </div>

          {/* Right: Countdown card */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            <div
              style={{
                backgroundColor: '#071A15',
                borderRadius: '1.25rem',
                border: '1px solid rgba(24, 166, 106, 0.25)',
                padding: '2rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(24, 166, 106, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '200px',
                  height: '100px',
                  background: 'radial-gradient(ellipse, rgba(24, 166, 106, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.75rem',
                    color: '#18A66A',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.5rem',
                  }}
                >
                  Next BurnBack Event
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 800,
                    fontSize: '1.375rem',
                    color: '#F4F5EF',
                    margin: 0,
                  }}
                >
                  Countdown
                </h3>
              </div>

              {/* Countdown display */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0.75rem',
                  marginBottom: '2rem',
                  justifyItems: 'center',
                }}
              >
                <CountdownUnit value={days} label="Days" />
                <CountdownUnit value={hours} label="Hours" />
                <CountdownUnit value={minutes} label="Minutes" />
                <CountdownUnit value={seconds} label="Seconds" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  style={{
                    background: 'linear-gradient(135deg, #18A66A 0%, #0E7A4E 100%)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.875rem 1.5rem',
                    borderRadius: '0.625rem',
                    color: '#fff',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    width: '100%',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.9'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                >
                  🔔 Get Notified
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(164, 178, 169, 0.3)',
                    cursor: 'pointer',
                    padding: '0.875rem 1.5rem',
                    borderRadius: '0.625rem',
                    color: '#A4B2A9',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    width: '100%',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => alert('No previous events yet — the first BurnBack Event is coming soon!')}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#A4B2A9';
                    (e.currentTarget as HTMLButtonElement).style.color = '#F4F5EF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(164, 178, 169, 0.3)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#A4B2A9';
                  }}
                >
                  View Previous Events
                </button>
                <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9', textAlign: 'center', margin: 0, fontStyle: 'italic' }}>
                  No previous events yet — first event coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
