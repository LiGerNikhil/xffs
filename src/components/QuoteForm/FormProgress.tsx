import React from 'react';
import { Check } from 'lucide-react';

interface FormProgressProps {
  currentStep: number;
  steps: string[];
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`flex items-center ${index === steps.length - 1 ? '' : 'flex-1'}`}
          >
            <div className="relative flex items-center justify-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep > index 
                    ? 'bg-purple-pain border-purple-pain text-white' 
                    : currentStep === index 
                    ? 'border-purple-pain text-purple-pain' 
                    : 'border-gray-300 text-gray-300'
                  }`}
              >
                {currentStep > index ? (
                  <Check size={20} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className={`absolute -bottom-6 text-sm whitespace-nowrap
                ${currentStep >= index ? 'text-purple-pain' : 'text-gray-400'}`}
              >
                {step}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div className={`h-0.5 flex-1 mx-4 
                ${currentStep > index ? 'bg-purple-pain' : 'bg-gray-300'}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;