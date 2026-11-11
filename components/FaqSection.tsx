'use client';

import { useState } from 'react';
import { useIntersection } from '@/hooks/useIntersection';
import { FAQ_ITEMS } from '@/lib/constants';

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, index, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      style={{
        backgroundColor: index % 2 === 0 ? '#092B20' : 'transparent',
        borderRadius: '0.75rem',
        border: '1px solid',
        borderColor: isOpen ? 'rgba(24, 166, 106, 0.3)' : 'rgba(24, 166, 106, 0.1)',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.25rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading), Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#F4F5EF',
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {question}
        </span>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: isOpen ? 'rgba(24, 166, 106, 0.2)' : 'rgba(164, 178, 169, 0.1)',
            border: `1px solid ${isOpen ? 'rgba(24, 166, 106, 0.4)' : 'rgba(164, 178, 169, 0.2)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#18A66A' : '#A4B2A9'} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#18A66A' : '#A4B2A9'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <div
          style={{
            padding: '0 1.5rem 1.25rem',
            borderTop: '1px solid rgba(24, 166, 106, 0.08)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#A4B2A9',
              lineHeight: 1.75,
              margin: '1rem 0 0',
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.05, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#092B20',
        padding: '5rem 1.5rem',
        borderTop: '1px solid rgba(24, 166, 106, 0.1)',
        borderBottom: '1px solid rgba(24, 166, 106, 0.1)',
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
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
              FAQ
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
            Common Questions.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body), Inter, sans-serif',
              fontSize: '1.0625rem',
              color: '#A4B2A9',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Everything you need to know about $BURN, BurnBack Events, and how the ecosystem works.
          </p>
        </div>

        {/* Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.2s',
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            backgroundColor: 'rgba(244, 122, 53, 0.06)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(244, 122, 53, 0.15)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.4s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: '0.875rem',
              color: '#A4B2A9',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: '#F47A35', fontWeight: 600 }}>⚠️ Disclaimer:</span> Nothing on
            this website constitutes financial, investment, or legal advice. Always do your own
            research (DYOR) and consult qualified advisors. Cryptocurrency investments carry
            significant risk of loss.
          </p>
        </div>
      </div>
    </section>
  );
}
