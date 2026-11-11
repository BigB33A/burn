'use client';

import { useIntersection } from '@/hooks/useIntersection';

export default function HeroSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        backgroundColor: '#071A15',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
      }}
    >
      {/* Background particle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: i % 3 === 0 ? '3px' : '2px',
            height: i % 3 === 0 ? '3px' : '2px',
            backgroundColor: '#18A66A',
            borderRadius: '50%',
            top: `${Math.sin(i * 1.3) * 40 + 50}%`,
            left: `${((i * 37) % 100)}%`,
            opacity: 0.15 + (i % 5) * 0.05,
            animation: `pulse ${2 + (i % 3)}s ease-in-out ${i * 0.2}s infinite alternate`,
          }}
        />
      ))}

      {/* Radial glow top left */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(24, 166, 106, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <style>{`
        @keyframes pulse {
          from { opacity: 0.1; transform: scale(1); }
          to { opacity: 0.4; transform: scale(1.5); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div
        ref={ref}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Left: Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Live Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(244, 122, 53, 0.1)',
              border: '1px solid rgba(244, 122, 53, 0.3)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#F47A35',
                borderRadius: '50%',
                display: 'inline-block',
                animation: 'pulse 1.5s ease-in-out infinite alternate',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#F47A35',
                letterSpacing: '0.05em',
              }}
            >
              🔥 LIVE: First BurnBack Event Coming Soon
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                lineHeight: 1.05,
                color: '#F4F5EF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              We Burn Tokens.
            </h1>
            <h1
              style={{
                fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                lineHeight: 1.05,
                background: 'linear-gradient(90deg, #18A66A 0%, #F47A35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              Not Trees.
            </h1>
          </div>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#A4B2A9',
              lineHeight: 1.7,
              maxWidth: '520px',
              margin: 0,
            }}
          >
            BURNBACK is a Solana-based environmental restoration project. Every transaction with
            $BURN permanently destroys tokens and funds real-world tree planting events — verified
            on-chain, documented by NGOs, and provable by satellite imagery.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              style={{
                background: 'linear-gradient(135deg, #F47A35 0%, #e06825 100%)',
                border: 'none',
                cursor: 'pointer',
                padding: '0.875rem 2rem',
                borderRadius: '0.625rem',
                color: '#fff',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 20px rgba(244, 122, 53, 0.3)',
                letterSpacing: '0.03em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(244, 122, 53, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(244, 122, 53, 0.3)';
              }}
            >
              Buy $BURN 🔥
            </button>
            <button
              style={{
                background: 'transparent',
                border: '1px solid rgba(164, 178, 169, 0.4)',
                cursor: 'pointer',
                padding: '0.875rem 2rem',
                borderRadius: '0.625rem',
                color: '#F4F5EF',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#18A66A';
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(24, 166, 106, 0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(164, 178, 169, 0.4)';
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
            >
              Read Whitepaper →
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
            {[
              { icon: '✅', text: 'On-chain verification' },
              { icon: '✅', text: 'NGO partnerships' },
              { icon: '✅', text: 'Satellite proof' },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: '#A4B2A9',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          {/* Main visual container */}
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
              height: '420px',
              borderRadius: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(24, 166, 106, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Split background: fire left, forest right */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(80, 20, 5, 0.9) 0%, rgba(7, 26, 21, 0.9) 50%, rgba(5, 40, 20, 0.9) 100%)',
              }}
            />
            {/* Left warm glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                background: 'radial-gradient(ellipse at 30% 60%, rgba(244, 122, 53, 0.25) 0%, transparent 70%)',
              }}
            />
            {/* Right forest glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(ellipse at 70% 60%, rgba(24, 166, 106, 0.2) 0%, transparent 70%)',
              }}
            />
            {/* Center radial glow behind emblem */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(24, 166, 106, 0.15) 0%, transparent 70%)',
              }}
            />

            {/* Central Phoenix + Tree SVG emblem */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <svg viewBox="0 0 120 140" width="120" height="140" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tree trunk */}
                <rect x="55" y="100" width="10" height="25" rx="3" fill="#18A66A" opacity="0.9" />
                {/* Tree body layers */}
                <polygon points="60,30 90,80 30,80" fill="#18A66A" opacity="0.8" />
                <polygon points="60,15 85,60 35,60" fill="#22C97C" opacity="0.9" />
                <polygon points="60,5 78,42 42,42" fill="#30E088" opacity="1" />
                {/* Phoenix wings */}
                <path d="M20,70 Q5,50 15,30 Q30,50 40,65" fill="#F47A35" opacity="0.7" />
                <path d="M100,70 Q115,50 105,30 Q90,50 80,65" fill="#F47A35" opacity="0.7" />
                {/* Phoenix flame head */}
                <path d="M50,10 Q60,-5 70,10 Q65,0 60,8 Q55,0 50,10Z" fill="#F47A35" opacity="0.9" />
                {/* Sparkle dots */}
                <circle cx="20" cy="40" r="2" fill="#F47A35" opacity="0.6" />
                <circle cx="100" cy="35" r="2" fill="#F47A35" opacity="0.6" />
                <circle cx="10" cy="60" r="1.5" fill="#F47A35" opacity="0.4" />
                <circle cx="110" cy="55" r="1.5" fill="#F47A35" opacity="0.4" />
                {/* Ground line */}
                <line x1="30" y1="125" x2="90" y2="125" stroke="#18A66A" strokeWidth="1.5" strokeOpacity="0.4" />
              </svg>
            </div>

            {/* Floating badge 1 */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                left: '8%',
                backgroundColor: 'rgba(9, 43, 32, 0.9)',
                border: '1px solid rgba(24, 166, 106, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                animation: 'float 4s ease-in-out infinite',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>🔥</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.6875rem', fontWeight: 700, color: '#F4F5EF' }}>Tokens Burned</div>
                <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.625rem', color: '#18A66A' }}>Coming Soon</div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '6%',
                backgroundColor: 'rgba(9, 43, 32, 0.9)',
                border: '1px solid rgba(244, 122, 53, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                animation: 'float2 3.5s ease-in-out infinite',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>🌳</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.6875rem', fontWeight: 700, color: '#F4F5EF' }}>Trees Planted</div>
                <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.625rem', color: '#F47A35' }}>Launching Soon</div>
              </div>
            </div>

            {/* Floating badge 3 */}
            <div
              style={{
                position: 'absolute',
                top: '55%',
                left: '5%',
                backgroundColor: 'rgba(9, 43, 32, 0.9)',
                border: '1px solid rgba(24, 166, 106, 0.2)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                animation: 'float 5s ease-in-out 1s infinite',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>📍</span>
              <div>
                <div style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.6875rem', fontWeight: 700, color: '#F4F5EF' }}>GPS Verified</div>
                <div style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.625rem', color: '#A4B2A9' }}>On-Chain Proof</div>
              </div>
            </div>

            {/* Animated orbiting dot */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                right: '15%',
                width: '6px',
                height: '6px',
                backgroundColor: '#18A66A',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite alternate',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '20%',
                width: '5px',
                height: '5px',
                backgroundColor: '#F47A35',
                borderRadius: '50%',
                animation: 'pulse 2.5s ease-in-out 0.5s infinite alternate',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.5,
        }}
      >
        <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.6875rem', color: '#A4B2A9', letterSpacing: '0.1em' }}>SCROLL</span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #18A66A, transparent)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
