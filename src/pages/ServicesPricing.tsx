import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const ServicesPricing: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#7FB069]/10 to-[#98D8C8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#141711] mb-6">
            Services & Pricing
          </h1>
          <p className="text-xl md:text-2xl text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            Comprehensive Ayurvedic nutrition solutions for individuals and healthcare professionals
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Our Services</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              Tailored solutions for different needs and professional requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Patients */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#7FB069]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141711] mb-2">For Patients</h3>
                <p className="text-[#4B5563]">Personalized Ayurvedic nutrition for your wellness journey</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Prakriti Assessment</h4>
                    <p className="text-[#4B5563] text-sm">Comprehensive constitution analysis based on traditional Ayurvedic principles</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Personalized Meal Plans</h4>
                    <p className="text-[#4B5563] text-sm">AI-powered nutrition plans tailored to your unique constitution and goals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Progress Tracking</h4>
                    <p className="text-[#4B5563] text-sm">Monitor your health journey with detailed analytics and insights</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Expert Consultations</h4>
                    <p className="text-[#4B5563] text-sm">Connect with certified Ayurvedic practitioners for personalized guidance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#7FB069] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Mobile App Access</h4>
                    <p className="text-[#4B5563] text-sm">Track meals, progress, and connect with experts on-the-go</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* For Dieticians */}
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#98D8C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#141711] mb-2">For Dieticians</h3>
                <p className="text-[#4B5563]">Professional tools to enhance your Ayurvedic practice</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Patient Management System</h4>
                    <p className="text-[#4B5563] text-sm">Comprehensive dashboard to manage all your patients efficiently</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">AI-Assisted Diet Planning</h4>
                    <p className="text-[#4B5563] text-sm">Generate personalized meal plans with AI recommendations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Analytics & Reports</h4>
                    <p className="text-[#4B5563] text-sm">Track patient progress and generate detailed health reports</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Appointment Scheduling</h4>
                    <p className="text-[#4B5563] text-sm">Integrated calendar and booking system for consultations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#98D8C8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#141711]">Billing & Payments</h4>
                    <p className="text-[#4B5563] text-sm">Streamlined billing system with multiple payment options</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Choose Your Plan</h2>
            <p className="text-xl text-[#4B5563] max-w-3xl mx-auto">
              Flexible pricing options to suit your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="p-8 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#141711] mb-2">Basic</h3>
                <p className="text-[#4B5563] mb-4">Perfect for individuals starting their Ayurvedic journey</p>
                <div className="text-4xl font-bold text-[#7FB069] mb-2">₹499</div>
                <div className="text-[#4B5563]">per month</div>
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Prakriti Assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Basic Meal Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Mobile App Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Email Support</span>
                </div>
              </div>

              <Button className="w-full">Subscribe</Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 text-center border-2 border-[#7FB069] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#7FB069] text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#141711] mb-2">Pro</h3>
                <p className="text-[#4B5563] mb-4">Comprehensive solution for serious wellness enthusiasts</p>
                <div className="text-4xl font-bold text-[#7FB069] mb-2">₹999</div>
                <div className="text-[#4B5563]">per month</div>
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Everything in Basic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Advanced Meal Plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Expert Consultations (2/month)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Progress Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Priority Support</span>
                </div>
              </div>

              <Button className="w-full">Subscribe</Button>
            </Card>

            {/* Clinic Pack */}
            <Card className="p-8 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#141711] mb-2">Clinic Pack</h3>
                <p className="text-[#4B5563] mb-4">Professional solution for healthcare practitioners</p>
                <div className="text-4xl font-bold text-[#7FB069] mb-2">₹2,999</div>
                <div className="text-[#4B5563]">per month</div>
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Up to 100 Patients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Professional Dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">AI Diet Planning Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Analytics & Reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">Billing Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#7FB069]">✓</span>
                  <span className="text-[#4B5563]">24/7 Support</span>
                </div>
              </div>

              <Button className="w-full">Subscribe</Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#4B5563] mb-4">Need a custom solution for your organization?</p>
            <Link to="/contact">
              <Button variant="outline">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141711] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-[#4B5563]">
              Get answers to common questions about our services and pricing
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#141711] mb-3">Can I switch plans anytime?</h3>
              <p className="text-[#4B5563]">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#141711] mb-3">Is there a free trial available?</h3>
              <p className="text-[#4B5563]">
                We offer a 7-day free trial for all new users. No credit card required to start your trial.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#141711] mb-3">What payment methods do you accept?</h3>
              <p className="text-[#4B5563]">
                We accept all major credit cards, debit cards, UPI, net banking, and digital wallets.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#141711] mb-3">Can I cancel my subscription?</h3>
              <p className="text-[#4B5563]">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};