'use client';

import { useState } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import { TOKENOMICS_DATA } from '@/lib/constants';

interface DonutChartProps {
  data: typeof TOKENOMICS_DATA;
}

function DonutChart({ data }: DonutChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 110;
  const innerR = 70;

  // Calculate segments
  let cumulative = 0;
  const segments = data.map((item) => {
    const startAngle = (cumulative / 100) * 360 - 90;
    cumulative += item.percentage;
    const endAngle = (cumulative / 100) * 360 - 90;
    return { ...item, startAngle, endAngle };
  });

  function polarToCart(cx: number, cy: number, r: number, angleDeg: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function describeArc(startAngle: number, endAngle: number, isHovered: boolean) {
    const r = isHovered ? outerR + 6 : outerR;
    const start = polarToCart(cx, cy, r, startAngle);
    const end = polarToCart(cx, cy, r, endAngle);
    const startInner = polarToCart(cx, cy, innerR, startAngle);
    const endInner = polarToCart(cx, cy, innerR, endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return [
      `M ${start.x} ${start.y}`,
      `A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
      'Z',
    ].join(' ');
  }

  const hovered = hoveredIndex !== null ? data[hoveredIndex] : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ overflow: 'visible' }}
        >
          {segments.map((seg, i) => (
            <path
              key={seg.name}
              d={describeArc(seg.startAngle, seg.endAngle, hoveredIndex === i)}
              fill={seg.color}
              opacity={hoveredIndex === null || hoveredIndex === i ? 1 : 0.5}
              stroke="#071A15"
              strokeWidth="2"
              style={{ cursor: 'pointer', transition: 'opacity 0.2s ease' }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
          {/* Center text */}
          <text
            x={cx}
            y={cy - 10}
            textAnchor="middle"
            style={{
              fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: hovered ? '20px' : '16px',
              fill: hovered ? hovered.color : '#F4F5EF',
              transition: 'all 0.2s ease',
            }}
          >
            {hovered ? `${hovered.percentage}%` : '1B'}
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              fill: '#A4B2A9',
            }}
          >
            {hovered ? hovered.name : 'Total Supply'}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem 1.5rem',
          width: '100%',
          maxWidth: '320px',
        }}
      >
        {data.map((item, i) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.5,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '2px',
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#A4B2A9' }}>
              {item.name}
            </span>
            <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#F4F5EF', marginLeft: 'auto' }}>
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TokenomicsSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const taxBreakdown = [
    { label: 'Burn', pct: 2, color: '#EF4444' },
    { label: 'BurnBack', pct: 2, color: '#18A66A' },
    { label: 'Staking', pct: 1.5, color: '#8B5CF6' },
    { label: 'Marketing', pct: 0.5, color: '#F59E0B' },
  ];

  return (
    <section
      id="tokenomics"
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
              Tokenomics
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
            Built for Long-Term Impact.
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
            A deflationary token model designed to ensure BURNBACK has lasting environmental and
            economic value.
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
          {/* Left: Donut chart */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <DonutChart data={TOKENOMICS_DATA} />
          </div>

          {/* Right: Token info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
            }}
          >
            {/* Token info cards */}
            <div
              style={{
                backgroundColor: '#092B20',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(24, 166, 106, 0.15)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: '#18A66A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: '0 0 1rem',
                }}
              >
                Token Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Blockchain', value: 'Solana' },
                  { label: 'Ticker', value: '$BURN' },
                  { label: 'Total Supply', value: '1,000,000,000' },
                  { label: 'Burn Target', value: '100,000,000 (10%)' },
                  { label: 'Buy/Sell Tax', value: '6%' },
                  { label: 'Transfer Tax', value: '0%' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(164, 178, 169, 0.1)',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.875rem', color: '#A4B2A9' }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, fontSize: '0.9375rem', color: '#F4F5EF' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax breakdown */}
            <div
              style={{
                backgroundColor: '#092B20',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(24, 166, 106, 0.15)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: '#18A66A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: '0 0 0.5rem',
                }}
              >
                6% Tax Breakdown
              </h3>
              <p style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.8125rem', color: '#A4B2A9', margin: '0 0 1rem' }}>
                Applied on buy and sell transactions only
              </p>

              {/* Segmented bar */}
              <div
                style={{
                  display: 'flex',
                  borderRadius: '0.375rem',
                  overflow: 'hidden',
                  height: '10px',
                  marginBottom: '1rem',
                }}
              >
                {taxBreakdown.map((t) => (
                  <div
                    key={t.label}
                    style={{
                      flex: t.pct,
                      backgroundColor: t.color,
                    }}
                    title={`${t.label}: ${t.pct}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
                {taxBreakdown.map((t) => (
                  <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: t.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body), sans-serif', fontSize: '0.75rem', color: '#A4B2A9' }}>
                      {t.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-heading), sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#F4F5EF', marginLeft: 'auto' }}>
                      {t.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
