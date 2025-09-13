import React from 'react';
import { Card } from '../components/Card';

export const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#141711] mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between ancient Ayurvedic wisdom and modern nutrition science to create a healthier, more balanced world.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#141711] mb-6">Our Story</h2>
              <p className="text-lg text-[#4B5563] mb-6">
                AyurDiet was born from a simple yet profound realization: while modern nutrition focuses on calories and macronutrients, it often overlooks the individual's unique constitution and the seasonal rhythms that govern our health.
              </p>
              <p className="text-lg text-[#4B5563] mb-6">
                Our founders, a team of Ayurvedic practitioners and technology experts, witnessed firsthand how personalized Ayurvedic nutrition could transform lives. They saw patients struggling with generic diet plans that didn't consider their Prakriti, lifestyle, or the natural cycles that affect our well-being.
              </p>
              <p className="text-lg text-[#4B5563]">
                This inspired them to create India's first comprehensive Ayurvedic nutrition platform, combining the precision of modern technology with the timeless wisdom of Ayurveda.
              </p>
            </div>
            <Card className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#7FB069] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141711] mb-4">Founded with Purpose</h3>
                <p className="text-[#4B5563]">
                  "To make authentic Ayurvedic nutrition accessible to everyone, everywhere, through the power of technology."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Meet Our Team</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              A passionate team of Ayurvedic experts, technologists, and wellness advocates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-24 h-24 bg-[#7FB069]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#7FB069]">DS</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-2">Dr. Shruti Agarwal</h3>
              <p className="text-[#D97706] font-medium mb-4">Co-Founder & Chief Ayurveda Officer</p>
              <p className="text-[#4B5563]">
                20+ years of Ayurvedic practice, BAMS from Pune University, and passionate advocate for integrating traditional medicine with modern healthcare.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-24 h-24 bg-[#D97706]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#D97706]">RK</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-2">Rajesh Kumar</h3>
              <p className="text-[#D97706] font-medium mb-4">Co-Founder & CTO</p>
              <p className="text-[#4B5563]">
                Former tech lead at Google, IIT Delhi alumnus, and AI specialist. Passionate about using technology to solve real-world health challenges.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-24 h-24 bg-[#98D8C8]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#98D8C8]">PM</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-2">Priya Mehta</h3>
              <p className="text-[#D97706] font-medium mb-4">Head of Nutrition Science</p>
              <p className="text-[#4B5563]">
                MSc in Nutrition from AIIMS, certified nutritionist, and researcher in integrative medicine approaches to chronic disease management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Our Values</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7FB069]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Authenticity</h3>
              <p className="text-[#4B5563]">
                Staying true to traditional Ayurvedic principles while embracing modern innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97706]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Accessibility</h3>
              <p className="text-[#4B5563]">
                Making Ayurvedic nutrition accessible to everyone, regardless of background or location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#98D8C8]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Evidence-Based</h3>
              <p className="text-[#4B5563]">
                Validating traditional practices with modern research and data-driven insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#4B5563]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Innovation</h3>
              <p className="text-[#4B5563]">
                Continuously improving and evolving our platform to better serve our users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};