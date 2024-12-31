import React from 'react';
import FeatureCard from '../components/features/FeatureCard';
import StatCard from '../components/features/StatCard';
import { features, stats } from '../data/whyChooseUsData';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Curly IT?
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Your trusted partner in IT solutions with a proven track record of excellence,
              innovation, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-20">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with exceptional customer service to deliver
            IT solutions that drive your success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-gray-600 mb-8">
              Join hundreds of satisfied clients who trust us with their IT needs.
              Let's start your journey to better IT solutions today.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;