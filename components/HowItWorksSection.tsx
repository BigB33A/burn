'use client';

import { useIntersection } from '@/hooks/useIntersection';

interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: '🔄',
    title: 'TRADE',
    description: 'Buy or sell $BURN on any supported Solana DEX. Every transaction automatically triggers the BurnBack mechanism.',
    color: '#18A66A',
  },
  {
    number: 2,
    icon: '🔥',
    title: 'BURN',
    description: '2% of every trade is permanently removed from the token supply forever. The BurnBack Fund receives another 2% for restoration.',
    color: '#F47A35',
  },
  {
    number: 3,
    icon: '🌳',
    title: 'PLANT',
    description: 'On the 1st of every month, the BurnBack Fund is deployed to plant real trees in deforested regions, verified by on-ground NGO partners.',
    color: '#22C97C',
  },
  {
    number: 4,
    icon: '📍',
    title: 'PROVE',
    description: 'Every planted tree is documented with GPS coordinates, satellite imagery, and timestamped on-chain records. Proof, not promises.',
    color: '#A855F7',
  },
];

export default function HowItWorksSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: '#092B20',
        padding: '5rem 1.5rem',
        borderTop: '1px solid rgba(24, 166, 106, 0.1)',
        borderBottom: '1px solid rgba(24, 166, 106, 0.1)',
      }}
    >
      <style>{`
        @keyframes dash {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes slideRight {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div
        ref={ref}
        style={{ maxWidth: '1280px', margin: '0 auto' }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
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
              How It Works
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
            Turning Every Trade Into Environmental Action.
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
            Four steps. Zero complexity. Real-world impact built into every single transaction.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="lg:flex-row"
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                flex: 1,
              }}
              className="lg:flex-row lg:items-start"
            >
              {/* Step card */}
              <div
                style={{
                  flex: 1,
                  backgroundColor: '#071A15',
                  borderRadius: '1rem',
                  padding: '2rem',
                  border: `1px solid ${step.color}30`,
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: `${step.color}20`,
                    border: `1px solid ${step.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>

                {/* Background glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${step.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.125rem',
                    color: step.color,
                    margin: '0 0 0.625rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: '#A4B2A9',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow (desktop only, between steps) */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:flex"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 0.5rem',
                    flexShrink: 0,
                    marginTop: '2rem',
                  }}
                >
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                    <line
                      x1="0"
                      y1="10"
                      x2="30"
                      y2="10"
                      stroke="#18A66A"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      style={{
                        strokeDashoffset: isVisible ? 0 : 100,
                        transition: 'stroke-dashoffset 1s ease 0.5s',
                      }}
                    />
                    <polygon points="28,5 40,10 28,15" fill="#18A66A" opacity="0.7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3.5rem',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.8s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              background: 'linear-gradient(90deg, #18A66A 0%, #F47A35 60%, #18A66A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            Trade. Burn. Plant. Repeat.
          </p>
        </div>
      </div>
    </section>
  );
}
