import React from 'react';
import Banner from '../components/home/Banner';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import CustomerSegment from '../components/CustomerSegment';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogSection from '../components/blog/BlogSection';
import { services } from '../data/services';
import { customerSegments } from '../data/customerSegments';

const Home = () => {
  return (
    <>
      <Banner />

      {/* Customer Segments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions for Everyone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're a business looking for comprehensive IT support or an individual 
              needing technical assistance, we've got you covered.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customerSegments.map((segment, index) => (
              <CustomerSegment key={index} {...segment} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Support Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional IT services for businesses and individuals, delivering reliable 
              solutions for all your technology needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Ready to get started? Contact us to discuss your IT needs.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;