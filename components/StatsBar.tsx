'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  isVisible: boolean;
  note: string;
}

function StatItem({ label, value, suffix, prefix = '', isVisible, note }: StatItemProps) {
  const count = useAnimatedCounter(value, 2000, isVisible);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '1.5rem 1rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          color: '#F4F5EF',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {value === 0 ? (
          <span style={{ color: '#A4B2A9', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>Coming Soon</span>
        ) : (
          <>
            {prefix}
            {count.toLocaleString()}
            {suffix}
          </>
        )}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontWeight: 600,
          fontSize: '0.8125rem',
          color: '#18A66A',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.6875rem',
          color: '#A4B2A9',
        }}
      >
        {note}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });

  const stats: StatItemProps[] = [
    {
      label: 'Tokens Burned',
      value: 0,
      suffix: '',
      prefix: '',
      isVisible,
      note: 'Awaiting first event',
    },
    {
      label: 'Trees Planted',
      value: 0,
      suffix: '',
      prefix: '',
      isVisible,
      note: 'Verified by NGO',
    },
    {
      label: 'Hectares Restored',
      value: 0,
      suffix: '',
      prefix: '',
      isVisible,
      note: 'GPS + satellite verified',
    },
    {
      label: 'Token Holders',
      value: 0,
      suffix: '',
      prefix: '',
      isVisible,
      note: 'On Solana blockchain',
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#092B20',
        borderTop: '1px solid rgba(24, 166, 106, 0.2)',
        borderBottom: '1px solid rgba(24, 166, 106, 0.2)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
        className="sm:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(24, 166, 106, 0.1)' : 'none',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}
          >
            <StatItem {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
}
