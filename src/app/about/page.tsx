import { HeroSection } from "./_sections/hero-section";
import { MissionSection } from "./_sections/mission-section";
import WorksSection from "./_sections/how-it-works";
import StorySection from "./_sections/story-section";
import TeamSection from "./_sections/team-section";
import StatsSection from "./_sections/stats-section";
import { CtaSection } from "../_home_sections/cta-section";


import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <StorySection />
      <WorksSection />
      <TeamSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
}
