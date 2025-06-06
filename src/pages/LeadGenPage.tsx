import React, { useEffect } from 'react';
import { Target, Award, Users, Clock, CheckCircle } from 'lucide-react';
import CountUp from '../components/CountUp';
import CTAButton from '../components/CTAButton';

const LeadGenPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Lead Generation - XFFS';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Grow Your Trucking Business with Targeted Lead Generation</h1>
            <p className="text-lg mb-8">
              Our lead generation services are designed specifically for the trucking industry, helping you connect with shippers and brokers who need your services.
            </p>
            <CTAButton 
              text="Get Started Today" 
              to="/contact" 
              variant="primary"
              className="bg-white text-purple-pain hover:bg-ice-cold hover:text-charcoal"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Proven Results for Trucking Companies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our lead generation strategies have helped hundreds of trucking companies grow their customer base and increase revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <Target size={32} className="mx-auto mb-4 text-purple-pain" />
              <CountUp end={1500} suffix="+" />
              <p className="mt-2 text-gray-600">Leads Generated</p>
            </div>
            
            <div className="card text-center">
              <Award size={32} className="mx-auto mb-4 text-purple-pain" />
              <CountUp end={85} suffix="%" />
              <p className="mt-2 text-gray-600">Conversion Rate</p>
            </div>
            
            <div className="card text-center">
              <Users size={32} className="mx-auto mb-4 text-purple-pain" />
              <CountUp end={250} suffix="+" />
              <p className="mt-2 text-gray-600">Satisfied Clients</p>
            </div>
            
            <div className="card text-center">
              <Clock size={32} className="mx-auto mb-4 text-purple-pain" />
              <CountUp end={24} suffix="h" />
              <p className="mt-2 text-gray-600">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBI Services Section */}
      <section className="py-16 bg-freeze-purple">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our OBI Services</h2>
              <p className="text-gray-600 mb-6">
                Our Owner Business Intelligence (OBI) services provide trucking business owners with critical insights and connections to grow their operations.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-purple-pain mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Industry Connections</h3>
                    <p className="text-gray-600">
                      We connect you with shippers and brokers actively seeking trucking services in your operating areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-purple-pain mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Market Intelligence</h3>
                    <p className="text-gray-600">
                      Gain insights into market trends, rate fluctuations, and demand patterns in different regions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-purple-pain mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Development</h3>
                    <p className="text-gray-600">
                      Strategic guidance to expand your operations and increase your capacity efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-purple-pain mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Direct Lead Generation</h3>
                    <p className="text-gray-600">
                      Targeted campaigns to connect with potential customers in need of your specific services.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-purple-pain mt-1" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Competitor Analysis</h3>
                    <p className="text-gray-600">
                      Understand your competition and identify opportunities to differentiate your services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="h-56 rounded-lg shadow-md bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                  }}
                ></div>
                <div 
                  className="h-56 rounded-lg shadow-md bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/7348711/pexels-photo-7348711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                  }}
                ></div>
                <div 
                  className="h-56 rounded-lg shadow-md bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                  }}
                ></div>
                <div 
                  className="h-56 rounded-lg shadow-md bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/6169051/pexels-photo-6169051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Lead Generation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to generate high-quality leads for your trucking business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 bg-purple-pain rounded-full text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Discovery</h3>
              <p className="text-gray-600">
                We analyze your business, including your equipment, capacity, operating regions, and ideal customer profile.
              </p>
            </div>
            
            <div className="card relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 bg-purple-pain rounded-full text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a customized lead generation strategy targeting the most promising opportunities for your business.
              </p>
            </div>
            
            <div className="card relative">
              <div className="absolute -top-5 -left-5 h-12 w-12 bg-purple-pain rounded-full text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Execution</h3>
              <p className="text-gray-600">
                We implement the strategy using our industry connections, digital marketing, and direct outreach techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Grow Your Trucking Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our lead generation services can help you find more customers and increase your revenue.
          </p>
          <CTAButton 
            text="Get Started" 
            to="/contact" 
            variant="primary"
            className="bg-white text-purple-pain hover:bg-ice-cold hover:text-charcoal"
          />
        </div>
      </section>
    </div>
  );
};

export default LeadGenPage;