import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ProblemSection from '@/components/ProblemSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import BurnbackEventsSection from '@/components/BurnbackEventsSection';
import StakingSection from '@/components/StakingSection';
import RoadmapSection from '@/components/RoadmapSection';
import TransparencySection from '@/components/TransparencySection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <HowItWorksSection />
      <TokenomicsSection />
      <BurnbackEventsSection />
      <StakingSection />
      <RoadmapSection />
      <TransparencySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
