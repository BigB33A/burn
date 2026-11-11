'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { PROBLEM_CARDS } from '@/lib/constants';

export default function ProblemSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      style={{
        backgroundColor: '#071A15',
        padding: '5rem 1.5rem',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
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
              backgroundColor: 'rgba(244, 122, 53, 0.08)',
              border: '1px solid rgba(244, 122, 53, 0.2)',
              borderRadius: '100px',
              padding: '0.375rem 1rem',
              marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#F47A35', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              The Problem
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
            The World Is Losing Its Forests.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '1.0625rem',
              color: '#A4B2A9',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            Deforestation is one of the most pressing environmental emergencies of our time. Every
            minute, the equivalent of 27 football fields of forest disappears — and the pace is
            accelerating. BURNBACK was built to fight back.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {PROBLEM_CARDS.map((card, i) => (
            <div
              key={card.region}
              style={{
                backgroundColor: '#092B20',
                borderRadius: '1rem',
                border: '1px solid rgba(24, 166, 106, 0.15)',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'default',
                transition: `transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, opacity 0.7s ease ${i * 0.15}s, translate 0.7s ease ${i * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.01)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(244, 122, 53, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(24, 166, 106, 0.15)';
              }}
            >
              {/* Card content */}
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#F4F5EF',
                    margin: '0 0 0.75rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.region}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.9375rem',
                    color: '#A4B2A9',
                    lineHeight: 1.7,
                    margin: '0 0 1.5rem',
                  }}
                >
                  {card.description}
                </p>

                {/* Stat */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(244, 122, 53, 0.08)',
                    borderRadius: '0.5rem',
                    border: '1px solid rgba(244, 122, 53, 0.15)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading), sans-serif',
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      color: '#F47A35',
                    }}
                  >
                    {card.stat}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: '0.8125rem',
                      color: '#A4B2A9',
                    }}
                  >
                    {card.statLabel}
                  </span>
                </div>
              </div>

              {/* Gradient bottom border */}
              <div
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #F47A35 0%, #e06825 100%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '1.0625rem',
            color: '#A4B2A9',
            textAlign: 'center',
            fontStyle: 'italic',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.5s',
          }}
        >
          Different continents. Different causes.{' '}
          <span style={{ color: '#18A66A', fontWeight: 600, fontStyle: 'normal' }}>
            One planet worth protecting.
          </span>
        </p>
      </div>
    </section>
  );
}
