'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { ROADMAP_PHASES } from '@/lib/constants';

export default function RoadmapSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="roadmap"
      style={{
        backgroundColor: '#092B20',
        padding: '5rem 1.5rem',
        borderTop: '1px solid rgba(24, 166, 106, 0.1)',
        borderBottom: '1px solid rgba(24, 166, 106, 0.1)',
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
              Roadmap
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
            From One Seed to a Global Forest.
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
            Four phases of growth. From launch to a global environmental movement — each step
            building on the last.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Timeline line */}
          <div style={{ position: 'relative', marginBottom: '0' }}>
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                backgroundColor: 'rgba(24, 166, 106, 0.2)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: isVisible ? '25%' : '0%',
                  background: 'linear-gradient(90deg, #18A66A 0%, rgba(24, 166, 106, 0.3) 100%)',
                  transition: 'width 1.5s ease 0.5s',
                }}
              />
            </div>

            {/* Phase dots row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {ROADMAP_PHASES.map((phase, i) => (
                <div
                  key={phase.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}
                >
                  {/* Dot */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: phase.status === 'active' ? '#18A66A' : '#092B20',
                        border: `2px solid ${phase.status === 'active' ? '#18A66A' : 'rgba(24, 166, 106, 0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem',
                        boxShadow: phase.status === 'active' ? '0 0 20px rgba(24, 166, 106, 0.4)' : 'none',
                        animation: phase.status === 'active' ? 'glowPulse 2s ease-in-out infinite' : 'none',
                      }}
                    >
                      {phase.icon}
                    </div>
                  </div>

                  {/* Card below dot */}
                  <div
                    style={{
                      backgroundColor: '#071A15',
                      borderRadius: '1rem',
                      border: `1px solid ${phase.status === 'active' ? 'rgba(24, 166, 106, 0.4)' : 'rgba(24, 166, 106, 0.1)'}`,
                      padding: '1.25rem',
                      width: '100%',
                      opacity: isVisible ? (phase.status === 'upcoming' ? 0.75 : 1) : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                    }}
                  >
                    <div style={{ marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: '0.6875rem',
                          color: '#18A66A',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {phase.phase}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-heading), sans-serif',
                            fontWeight: 800,
                            fontSize: '1.125rem',
                            color: '#F4F5EF',
                            margin: 0,
                          }}
                        >
                          {phase.name}
                        </h3>
                        {phase.status === 'upcoming' && (
                          <span
                            style={{
                              fontFamily: 'var(--font-body), sans-serif',
                              fontSize: '0.6rem',
                              color: '#A4B2A9',
                              backgroundColor: 'rgba(164, 178, 169, 0.1)',
                              borderRadius: '100px',
                              padding: '0.125rem 0.5rem',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Upcoming
                          </span>
                        )}
                        {phase.status === 'active' && (
                          <span
                            style={{
                              fontFamily: 'var(--font-body), sans-serif',
                              fontSize: '0.6rem',
                              color: '#18A66A',
                              backgroundColor: 'rgba(24, 166, 106, 0.1)',
                              borderRadius: '100px',
                              padding: '0.125rem 0.5rem',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {phase.milestones.map((milestone) => (
                        <div
                          key={milestone.text}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontFamily: 'var(--font-body), sans-serif',
                            fontSize: '0.8125rem',
                            color: milestone.done ? '#18A66A' : '#A4B2A9',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ flexShrink: 0 }}>{milestone.done ? '✅' : '◦'}</span>
                          <span style={{ textDecoration: milestone.done ? 'none' : 'none' }}>
                            {milestone.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden">
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '23px',
                width: '2px',
                background: 'linear-gradient(to bottom, #18A66A 0%, rgba(24, 166, 106, 0.1) 100%)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {ROADMAP_PHASES.map((phase, i) => (
                <div
                  key={phase.id}
                  style={{
                    position: 'relative',
                    opacity: isVisible ? (phase.status === 'upcoming' ? 0.75 : 1) : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2.5rem',
                      top: '0',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: phase.status === 'active' ? '#18A66A' : '#092B20',
                      border: `2px solid ${phase.status === 'active' ? '#18A66A' : 'rgba(24, 166, 106, 0.3)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      boxShadow: phase.status === 'active' ? '0 0 20px rgba(24, 166, 106, 0.4)' : 'none',
                    }}
                  >
                    {phase.icon}
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      marginLeft: '1.5rem',
                      backgroundColor: '#071A15',
                      borderRadius: '1rem',
                      border: `1px solid ${phase.status === 'active' ? 'rgba(24, 166, 106, 0.4)' : 'rgba(24, 166, 106, 0.1)'}`,
                      padding: '1.25rem',
                    }}
                  >
                    <div style={{ marginBottom: '0.75rem' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontSize: '0.6875rem',
                          color: '#18A66A',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {phase.phase}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-heading), sans-serif',
                            fontWeight: 800,
                            fontSize: '1.125rem',
                            color: '#F4F5EF',
                            margin: 0,
                          }}
                        >
                          {phase.name}
                        </h3>
                        {phase.status === 'active' && (
                          <span
                            style={{
                              fontFamily: 'var(--font-body), sans-serif',
                              fontSize: '0.6rem',
                              color: '#18A66A',
                              backgroundColor: 'rgba(24, 166, 106, 0.1)',
                              borderRadius: '100px',
                              padding: '0.125rem 0.5rem',
                              letterSpacing: '0.05em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {phase.milestones.map((milestone) => (
                        <div
                          key={milestone.text}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontFamily: 'var(--font-body), sans-serif',
                            fontSize: '0.875rem',
                            color: milestone.done ? '#18A66A' : '#A4B2A9',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ flexShrink: 0 }}>{milestone.done ? '✅' : '◦'}</span>
                          <span>{milestone.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(24, 166, 106, 0.4); }
          50% { box-shadow: 0 0 35px rgba(24, 166, 106, 0.7); }
        }
      `}</style>
    </section>
  );
}
