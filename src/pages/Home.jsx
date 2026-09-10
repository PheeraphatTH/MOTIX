import React from 'react';
import { Hero } from '../components/home/Hero';
import { VehicleFinder } from '../components/home/VehicleFinder';
import { SmartRecommendationSection } from '../components/home/SmartRecommendationSection';
import { Categories } from '../components/home/Categories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { FlashSale } from '../components/home/FlashSale';
import { PromotionBanner } from '../components/home/PromotionBanner';
import { WhyMotix } from '../components/home/WhyMotix';
import { Testimonials } from '../components/home/Testimonials';
import { MarketingShowcase } from '../components/home/MarketingShowcase';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Smart Recommendation Section (ระบบแนะนำอะไหล่อัจฉริยะ & แบบฟอร์มคัดกรอง) - ย้ายขึ้นบนสุดเพื่อให้เห็นทันที */}
      <SmartRecommendationSection />

      {/* 3. Vehicle Finder Tool */}
      <VehicleFinder />

      {/* 4. Flash Sale Deal of the Day with react-countdown */}
      <FlashSale />

      {/* 5. Product Categories */}
      <Categories />

      {/* 5. Featured Products & Best Sellers */}
      <FeaturedProducts />

      {/* 6. Promotion & Bundles Banner */}
      <PromotionBanner />

      {/* 7. Why Choose MOTIX */}
      <WhyMotix />

      {/* 8. Customer Reviews & Social Proof */}
      <Testimonials />

      {/* 9. Brand Core & Digital Marketing Journey */}
      <MarketingShowcase />
    </div>
  );
};
