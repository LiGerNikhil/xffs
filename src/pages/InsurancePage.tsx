import React, { useEffect } from 'react';
import QuoteForm from '../components/QuoteForm/QuoteForm';

const InsurancePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Insurance Quotes - XFFS';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Get Your Trucking Insurance Quote</h1>
            <p className="text-lg mb-8">
              Complete the form below to receive a competitive insurance quote tailored to your trucking business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-freeze-purple">
        <div className="container-custom">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;