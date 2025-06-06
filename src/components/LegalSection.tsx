import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LegalSectionProps {
  title: string;
  content: string | React.ReactNode;
  defaultOpen?: boolean;
}

const LegalSection: React.FC<LegalSectionProps> = ({ 
  title, 
  content, 
  defaultOpen = true 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-purple-pain focus:ring-opacity-50"
      >
        <h2 className="text-xl font-semibold text-purple-pain">{title}</h2>
        {isOpen ? (
          <ChevronUp className="text-purple-pain" />
        ) : (
          <ChevronDown className="text-purple-pain" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 prose prose-lg max-w-none">
          {typeof content === 'string' ? (
            <p className="text-charcoal">{content}</p>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

export default LegalSection;