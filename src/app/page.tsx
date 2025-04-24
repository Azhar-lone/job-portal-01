import { HeroSection } from "./_home_sections/hero-section";
import { TopCompaniesSection } from "./_home_sections/top-companies-section";
import { RecentJobsSection } from "./_home_sections/recent-jobs-section";
import { CtaSection } from "./_home_sections/cta-section";
import { CategoriesSection } from "./_home_sections/categories-section";
import { TestimonialsSection } from "./_home_sections/testimonials-section";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <TopCompaniesSection />
      <RecentJobsSection />
      <CtaSection />
      <CategoriesSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
