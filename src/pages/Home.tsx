import HeroSection from '../components/home/HeroSection';
import EventsSection from '../components/home/EventsSection';
import NewsSection from '../components/home/NewsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import BenefitsCarousel from '../components/home/BenefitsCarousel';

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-hidden">
      <HeroSection />
      <EventsSection />
      <NewsSection />
      <ServicesPreview />
      <BenefitsCarousel />
    </div>
  );
}
