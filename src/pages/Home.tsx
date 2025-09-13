import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#141711] mb-6">
            Your Personalized
            <span className="text-[#7FB069]"> Ayurvedic</span>
            <br />Nutrition Journey
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the perfect balance of ancient wisdom and modern science. Get AI-powered, personalized diet plans based on your unique Ayurvedic constitution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup/patient">
              <Button size="lg" className="px-8 py-4 w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" size="lg" className="px-8 py-4 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Why Choose AyurDiet?</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              Experience the perfect blend of traditional Ayurvedic principles and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#7FB069]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Personalized Plans</h3>
              <p className="text-[#4B5563]">
                AI-powered recommendations based on your unique Prakriti, lifestyle, and health goals.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#98D8C8]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Expert Guidance</h3>
              <p className="text-[#4B5563]">
                Connect with certified Ayurvedic practitioners and nutritionists for personalized support.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-[#D97706]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-[#141711] mb-4">Track Progress</h3>
              <p className="text-[#4B5563]">
                Monitor your health journey with detailed analytics and progress tracking tools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069] to-[#98D8C8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Expert Dieticians</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#141711] mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-[#4B5563] mb-8">
            Join thousands of users who have already discovered the power of personalized Ayurvedic nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup/patient">
              <Button size="lg" className="px-8 py-4 w-full sm:w-auto">
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};