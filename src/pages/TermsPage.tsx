import React, { useEffect } from 'react';
import { ArrowUp, AlertTriangle } from 'lucide-react';
import LegalSection from '../components/LegalSection';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions - XFFS';
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-pain mb-6">Terms & Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8">
              Please read these Terms and Conditions carefully before using the services provided by X Fleet & Freight Solutions (XFFS).
            </p>

            <div className="space-y-6">
              <LegalSection
                title="1. Acceptance of Terms"
                content="By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services."
              />

              <LegalSection
                title="2. Services Provided"
                content={
                  <>
                    <p>Our services include but are not limited to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Insurance quote generation and policy management</li>
                      <li>Dispatch services and load matching</li>
                      <li>Lead generation for trucking companies</li>
                      <li>Fleet management consulting</li>
                    </ul>
                  </>
                }
              />

              <LegalSection
                title="3. User Obligations"
                content={
                  <>
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the confidentiality of your account</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Use services only for legitimate business purposes</li>
                    </ul>
                  </>
                }
              />

              <LegalSection
                title="4. Payment Terms"
                content="Payment for services is due upon receipt of invoice. Late payments may result in service suspension and additional fees. All fees are non-refundable unless otherwise specified in writing."
              />

              <LegalSection
                title="5. Intellectual Property"
                content="All content, trademarks, and intellectual property on our platform are owned by XFFS. Users may not copy, modify, or distribute our content without explicit permission."
              />

              <LegalSection
                title="6. Limitation of Liability"
                content={
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <AlertTriangle size={24} className="text-red-500 mr-2" />
                      <p className="font-semibold text-red-700">Important Disclaimer</p>
                    </div>
                    <p className="text-red-700">
                      XFFS services are provided "as is" without any warranty. We are not liable for any damages arising from the use of our services, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                    </p>
                  </div>
                }
              />

              <LegalSection
                title="7. Modifications to Terms"
                content="We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms."
              />
            </div>

            <div className="mt-8 p-6 bg-ice-cold rounded-lg">
              <p className="text-center text-lg">
                For questions about these terms, contact us at{' '}
                <a
                  href="mailto:legal@xffs.com"
                  className="text-purple-pain hover:text-medium-purple transition-colors duration-300"
                >
                  legal@xffs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-pain text-white p-3 rounded-full shadow-lg hover:bg-medium-purple transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default TermsPage;