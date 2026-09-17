import React from 'react';
import { Hero } from '../components/home/Hero';
import { SmartRecommendationSection } from '../components/home/SmartRecommendationSection';
import { MemberExclusive } from '../components/home/MemberExclusive';
import { Categories } from '../components/home/Categories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { FlashSale } from '../components/home/FlashSale';
import { MotixGarage } from '../components/home/MotixGarage';
import { PromotionBanner } from '../components/home/PromotionBanner';
import { WhyMotix } from '../components/home/WhyMotix';
import { Testimonials } from '../components/home/Testimonials';
import { MarketingShowcase } from '../components/home/MarketingShowcase';

export const Home = () => {
  return (
    <div className="min-h-screen space-y-14 sm:space-y-20 pb-16">
      {/* 1. Hero Section (Keep Your Ride Moving + Motorsport Visual) */}
      <Hero />

      {/* 2. Smart Recommendation Section (ระบบแนะนำอะไหล่อัจฉริยะ & แบบฟอร์มคัดกรองตรงรุ่น) */}
      <SmartRecommendationSection />

      {/* 3. Member Exclusive (สิทธิพิเศษสมาชิก MOTIX ตามเรฟรูปภาพ) */}
      <MemberExclusive />

      {/* 4. Flash Sale Deal of the Day */}
      <FlashSale />

      {/* 5. Product Categories */}
      <Categories />

      {/* 6. Featured Products & Best Sellers */}
      <FeaturedProducts />

      {/* 7. MOTIX Garage (ความรู้ดี ๆ สำหรับคนรักรถ ตามเรฟรูปภาพ) */}
      <MotixGarage />

      {/* 8. Promotion & Bundles Banner */}
      <PromotionBanner />

      {/* 9. Why Choose MOTIX (4 เสาหลักการันตีอะไหล่แท้และการบริการ) */}
      <WhyMotix />

      {/* 10. Customer Reviews & Social Proof */}
      <Testimonials />

      {/* 11. Brand Core & Digital Marketing Journey */}
      <MarketingShowcase />
    </div>
  );
};
