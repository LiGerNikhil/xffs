import React, { useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import LegalSection from '../components/LegalSection';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - XFFS';
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-pain mb-6">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8">
              At X Fleet & Freight Solutions (XFFS), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            <div className="space-y-6">
              <LegalSection
                title="1. Information We Collect"
                content={
                  <>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information</li>
                      <li>Company details and DOT number</li>
                      <li>Fleet information and operating history</li>
                      <li>Insurance requirements and claims history</li>
                      <li>Payment information for services rendered</li>
                    </ul>
                  </>
                }
              />

              <LegalSection
                title="2. How We Use Your Information"
                content={
                  <>
                    <p>We use the collected information for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Providing insurance quotes and coverage</li>
                      <li>Managing dispatch services</li>
                      <li>Generating and qualifying leads</li>
                      <li>Improving our services</li>
                      <li>Communicating with you about our services</li>
                    </ul>
                  </>
                }
              />

              <LegalSection
                title="3. Information Sharing"
                content="We do not sell your personal information to third parties. We may share your information with insurance providers, dispatch partners, and other service providers who assist in delivering our services. All partners are bound by strict confidentiality agreements."
              />

              <LegalSection
                title="4. Data Security"
                content="We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
              />

              <LegalSection
                title="5. Your Rights"
                content={
                  <>
                    <p className="font-semibold mb-4">Your Rights Under U.S. Laws:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>File a complaint about privacy practices</li>
                    </ul>
                  </>
                }
              />

              <LegalSection
                title="6. Cookies and Tracking"
                content="We use cookies and similar tracking technologies to analyze website usage and improve our services. You can control cookie settings through your browser preferences."
              />

              <LegalSection
                title="7. Updates to Privacy Policy"
                content="We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date."
              />
            </div>

            <div className="mt-8 p-6 bg-ice-cold rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Mail size={24} className="text-purple-pain" />
                <p className="text-lg">
                  For privacy-related inquiries, contact us at{' '}
                  <a
                    href="mailto:privacy@xffs.com"
                    className="text-purple-pain hover:text-medium-purple transition-colors duration-300"
                  >
                    privacy@xffs.com
                  </a>
                </p>
              </div>
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

export default PrivacyPolicyPage;