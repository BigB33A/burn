'use client';

import { useIntersection } from '@/hooks/useIntersection';

export default function FinalCtaSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #071A15 0%, #092B20 40%, #0E3D2A 70%, #071A15 100%)',
      }}
    >
      {/* Background watermark SVG */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 400 400" width="500" height="500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="195" stroke="#18A66A" strokeWidth="2" />
          {/* Tree trunk */}
          <rect x="185" y="260" width="30" height="100" rx="8" fill="#18A66A" />
          {/* Tree layers */}
          <polygon points="200,60 290,220 110,220" fill="#18A66A" />
          <polygon points="200,30 275,180 125,180" fill="#22C97C" />
          <polygon points="200,10 255,140 145,140" fill="#30E088" />
          {/* Phoenix wings */}
          <path d="M80,210 Q30,160 60,100 Q110,160 130,200" fill="#F47A35" opacity="0.6" />
          <path d="M320,210 Q370,160 340,100 Q290,160 270,200" fill="#F47A35" opacity="0.6" />
          {/* Flame top */}
          <path d="M180,25 Q200,-20 220,25 Q210,5 200,20 Q190,5 180,25Z" fill="#F47A35" />
        </svg>
      </div>

      {/* Particle sparkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: i % 4 === 0 ? '4px' : '2px',
            height: i % 4 === 0 ? '4px' : '2px',
            backgroundColor: i % 2 === 0 ? '#18A66A' : '#F47A35',
            borderRadius: '50%',
            top: `${10 + (i * 73) % 80}%`,
            left: `${5 + (i * 47) % 90}%`,
            opacity: 0.3 + (i % 4) * 0.1,
            animation: `sparkle ${2 + (i % 3)}s ease-in-out ${i * 0.3}s infinite alternate`,
          }}
        />
      ))}

      <style>{`
        @keyframes sparkle {
          0% { opacity: 0.1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0.6; transform: scale(1.8) rotate(45deg); }
        }
      `}</style>

      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(244, 122, 53, 0.1)',
            border: '1px solid rgba(244, 122, 53, 0.3)',
            borderRadius: '100px',
            padding: '0.375rem 1.125rem',
            marginBottom: '1.75rem',
          }}
        >
          <span style={{ fontSize: '0.875rem' }}>🌿</span>
          <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8125rem', fontWeight: 600, color: '#F47A35', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Join the Movement
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#F4F5EF' }}>The Forest</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #18A66A 0%, #F47A35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Is Waiting.
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#A4B2A9',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
          }}
        >
          Every $BURN token you hold is a vote for a greener planet. Every transaction funds
          real trees in real forests. The first BurnBack Event is coming — be part of it from
          the beginning.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            style={{
              background: 'linear-gradient(135deg, #F47A35 0%, #e06825 100%)',
              border: 'none',
              cursor: 'pointer',
              padding: '1rem 2.25rem',
              borderRadius: '0.75rem',
              color: '#fff',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '1.0625rem',
              fontWeight: 700,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 25px rgba(244, 122, 53, 0.3)',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 40px rgba(244, 122, 53, 0.45)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 25px rgba(244, 122, 53, 0.3)';
            }}
          >
            🔥 Buy $BURN Now
          </button>

          <button
            style={{
              background: 'transparent',
              border: '1px solid rgba(24, 166, 106, 0.5)',
              cursor: 'pointer',
              padding: '1rem 2.25rem',
              borderRadius: '0.75rem',
              color: '#18A66A',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '1.0625rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(24, 166, 106, 0.1)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#18A66A';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(24, 166, 106, 0.5)';
            }}
          >
            📄 Read Whitepaper
          </button>

          <button
            style={{
              background: 'transparent',
              border: '1px solid rgba(164, 178, 169, 0.3)',
              cursor: 'pointer',
              padding: '1rem 2.25rem',
              borderRadius: '0.75rem',
              color: '#A4B2A9',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '1.0625rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(164, 178, 169, 0.05)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#A4B2A9';
              (e.currentTarget as HTMLButtonElement).style.color = '#F4F5EF';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(164, 178, 169, 0.3)';
              (e.currentTarget as HTMLButtonElement).style.color = '#A4B2A9';
            }}
          >
            💬 Join Community
          </button>
        </div>

        {/* Social proof row */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: '🐦', label: 'Twitter / X', sub: '@BurnbackToken' },
            { icon: '✈️', label: 'Telegram', sub: 't.me/BurnbackOfficial' },
            { icon: '💬', label: 'Discord', sub: 'discord.gg/burnback' },
          ].map((social) => (
            <div
              key={social.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '1.125rem' }}>{social.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8125rem', fontWeight: 600, color: '#F4F5EF' }}>
                  {social.label}
                </div>
                <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9' }}>
                  {social.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
