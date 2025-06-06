import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Users } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import CTAButton from '../components/CTAButton';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'XFFS - X Fleet & Freight Solutions';
  }, []);

  const services = [
    {
      title: 'Insurance Quotes',
      description: 'Get competitive insurance quotes tailored for trucking companies with our streamlined process.',
      icon: ShieldCheck,
      delay: 100,
    },
    {
      title: 'Dispatch Services',
      description: 'Find the best loads and optimize your routes with our professional dispatch services.',
      icon: Truck,
      delay: 200,
    },
    {
      title: 'Lead Generation',
      description: 'Grow your business with our targeted lead generation services for the trucking industry.',
      icon: Users,
      delay: 300,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center bg-gradient-primary overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container-custom py-20 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="mb-6 text-white drop-shadow-md">
              Your One-Stop Solution for Trucking Insurance Quotes, Dispatch Services & Lead Generation!
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
              XFFS provides comprehensive services for trucking companies, helping you navigate insurance, find profitable loads, and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton 
                text="Get a Free Quote" 
                to="/insurance" 
                variant="primary"
              />
              <CTAButton 
                text="Find Loads" 
                to="/dispatch" 
                variant="outline"
                className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-100"
              />
              <CTAButton 
                text="Generate Leads" 
                to="/lead-generation" 
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-freeze-purple">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services to help your trucking business thrive in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what trucking companies and owner-operators are saying about XFFS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-freeze-purple p-6 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: '100ms' }}>
              <p className="text-gray-600 italic mb-4">
                "XFFS helped me find the best insurance rates for my fleet. Their process was quick and painless, and I ended up saving thousands of dollars."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-medium-purple"></div>
                <div className="ml-3">
                  <p className="font-medium">John D.</p>
                  <p className="text-sm text-gray-500">Owner-Operator</p>
                </div>
              </div>
            </div>
            
            <div className="bg-freeze-purple p-6 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: '200ms' }}>
              <p className="text-gray-600 italic mb-4">
                "Their dispatch services have transformed my business. I'm always running with a full load and maximizing my profits."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-medium-purple"></div>
                <div className="ml-3">
                  <p className="font-medium">Maria R.</p>
                  <p className="text-sm text-gray-500">Fleet Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-freeze-purple p-6 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: '300ms' }}>
              <p className="text-gray-600 italic mb-4">
                "The lead generation service from XFFS helped my company expand into new markets. Their targeted approach really works!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-medium-purple"></div>
                <div className="ml-3">
                  <p className="font-medium">Robert T.</p>
                  <p className="text-sm text-gray-500">Logistics Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Take Your Trucking Business to the Next Level?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to learn how XFFS can help your business grow and succeed.
          </p>
          <CTAButton 
            text="Contact Us Now" 
            to="/contact" 
            variant="primary"
            className="bg-white text-purple-pain hover:bg-ice-cold hover:text-charcoal"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;