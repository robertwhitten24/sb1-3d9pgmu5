import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 mb-6">
              <div className="w-12 h-1 bg-indigo-500 rounded-full" />
              <span className="text-sm font-semibold tracking-wider uppercase">IT Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your <span className="text-indigo-400">IT Infrastructure</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Expert IT support and solutions that drive business growth. 
              Available 24/7 across the UK.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact-section')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('services-section')}
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-gray-700"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <Shield className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-400">Advanced protection for your business assets</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <Clock className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-400">Round-the-clock technical assistance</p>
              </div>
            </div>
            <div className="mt-12">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <Users className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-400">Certified professionals at your service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;