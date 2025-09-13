import React from 'react';
import { Card } from '../components/Card';

export const Features: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#141711] mb-6">
            Powerful Features for
            <span className="text-[#7FB069]"> Your Wellness</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            Discover how AyurDiet combines ancient wisdom with modern technology to transform your health journey
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#141711] mb-6">AI-Powered Personalization</h2>
              <p className="text-lg text-[#4B5563] mb-6">
                Our advanced AI analyzes your unique Ayurvedic constitution (Prakriti), current health status (Vikriti), lifestyle factors, and preferences to create truly personalized nutrition plans.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">Detailed Prakriti assessment based on traditional Ayurvedic principles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">Real-time adaptation based on seasonal changes and health goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">Integration with wearable devices for comprehensive health tracking</span>
                </li>
              </ul>
            </div>
            <Card className="p-8">
              <div className="bg-gradient-to-br from-[#7FB069]/20 to-[#98D8C8]/20 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#7FB069] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#141711] mb-2">Smart Recommendations</h3>
                  <p className="text-[#4B5563]">Get personalized meal suggestions that adapt to your changing needs</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <Card className="p-8 lg:order-2">
              <div className="bg-gradient-to-br from-[#98D8C8]/20 to-[#D97706]/20 rounded-xl p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#98D8C8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-white">👨‍⚕️</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#141711] mb-2">Expert Consultations</h3>
                  <p className="text-[#4B5563]">Connect with certified practitioners for personalized guidance</p>
                </div>
              </div>
            </Card>
            <div className="lg:order-1">
              <h2 className="text-4xl font-bold text-[#141711] mb-6">Expert Guidance</h2>
              <p className="text-lg text-[#4B5563] mb-6">
                Connect with certified Ayurvedic practitioners and nutritionists who understand both traditional principles and modern nutritional science.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">Video consultations with certified Ayurvedic practitioners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">24/7 chat support for quick questions and guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#4B5563]">Personalized meal plan reviews and adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Complete Wellness Platform</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              Everything you need for your Ayurvedic nutrition journey in one comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-[#7FB069]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Mobile App</h3>
              <p className="text-[#4B5563]">
                Track your meals, progress, and connect with experts on-the-go with our intuitive mobile application.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-[#98D8C8]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Meal Planning</h3>
              <p className="text-[#4B5563]">
                Get detailed meal plans with recipes, shopping lists, and cooking instructions tailored to your constitution.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-[#D97706]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Progress Tracking</h3>
              <p className="text-[#4B5563]">
                Monitor your health metrics, energy levels, and overall well-being with comprehensive analytics.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-[#4B5563]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Seasonal Adaptation</h3>
              <p className="text-[#4B5563]">
                Automatically adjust your diet plan based on seasonal changes and their impact on your dosha balance.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-[#7FB069]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Goal Setting</h3>
              <p className="text-[#4B5563]">
                Set and track specific health goals like weight management, energy improvement, or digestive health.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-[#98D8C8]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-3">Educational Content</h3>
              <p className="text-[#4B5563]">
                Access a comprehensive library of Ayurvedic nutrition knowledge, recipes, and wellness tips.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Powered by Advanced Technology</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              Our platform leverages cutting-edge technology to deliver authentic Ayurvedic nutrition guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7FB069]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Machine Learning</h3>
              <p className="text-[#4B5563]">
                Advanced algorithms that learn from your responses and continuously improve recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97706]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Data Security</h3>
              <p className="text-[#4B5563]">
                Enterprise-grade security ensures your health data is protected with the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#98D8C8]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Cloud Platform</h3>
              <p className="text-[#4B5563]">
                Scalable cloud infrastructure ensures fast, reliable access to your personalized nutrition plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};