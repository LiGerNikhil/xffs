import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const steps = ['Company Info', 'Owner Details', 'Fleet Details', 'Review'];

const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, setValue } = useForm();

  // Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem('quoteFormData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  // const saveProgress = () => {
  //   const currentData = watch();
  //   localStorage.setItem('quoteFormData', JSON.stringify(currentData));
  // };

  const hasDOT = watch('hasDOT');

  const onSubmit = (data: any) => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', data);
      localStorage.removeItem('quoteFormData');
      // Handle final submission (API call or similar)
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div className="flex justify-between mb-8">
        {steps.map((label, index) => (
          <div key={label} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-purple-pain' : 'bg-gray-200'
              } text-white`}
            >
              {step > index + 1 ? <Check size={20} /> : index + 1}
            </div>
            <span className={`mt-2 text-sm ${step === index + 1 ? 'font-medium text-purple-pain' : 'text-gray-500'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-purple-pain mb-6">Company Information</h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Do you have a DOT Number?</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" value="true" {...register('hasDOT')} />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" value="false" {...register('hasDOT')} />
                  <span>No</span>
                </label>
              </div>
            </div>
            {hasDOT === 'true' && (
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">DOT Number</label>
                <input
                  type="text"
                  {...register('dotNumber')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                {...register('companyName')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-purple-pain mb-6">Owner Details</h2>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input
                type="text"
                {...register('ownerName')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('ownerEmail')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                {...register('ownerPhone')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-purple-pain mb-6">Fleet Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Number of Units</label>
                <input
                  type="number"
                  {...register('numberOfUnits')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Number of Drivers</label>
                <input
                  type="number"
                  {...register('numberOfDrivers')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Type</label>
                <select
                  {...register('cargoType')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
                >
                  <option value="">Select Cargo Type</option>
                  <option value="general">General Freight</option>
                  <option value="household">Household Goods</option>
                  <option value="hazardous">Hazardous Materials</option>
                  <option value="refrigerated">Refrigerated Freight</option>
                  <option value="agricultural">Agricultural Products</option>
                  <option value="automotive">Automotive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Operating Radius</label>
                <select
                  {...register('operatingRadius')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-pain focus:border-purple-pain"
                >
                  <option value="">Select Operating Radius</option>
                  <option value="local">Local (0-50 miles)</option>
                  <option value="intermediate">Intermediate (51-200 miles)</option>
                  <option value="longHaul">Long Haul (201+ miles)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-purple-pain mb-6">Review Your Information</h2>
            <div className="bg-white rounded-lg p-6 shadow-md">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Field</th>
        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Value</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100">
      {Object.entries(watch()).map(([key, value]) => (
        <tr key={key}>
          <td className="px-4 py-2 text-sm text-gray-800 font-semibold">{key}</td>
          <td className="px-4 py-2 text-sm text-gray-700">
            {typeof value === 'object' ? JSON.stringify(value) : value?.toString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            <div className="mt-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  {...register('terms')}
                  className="text-purple-pain focus:ring-purple-pain h-4 w-4"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-purple-pain hover:text-medium-purple">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center text-purple-pain hover:text-medium-purple transition-colors duration-300"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back
            </button>
          )}

          <div className="flex space-x-4">
            {/* <button
              type="button"
              onClick={saveProgress}
              className="flex items-center px-4 py-2 border-2 border-purple-pain text-purple-pain rounded-md hover:bg-purple-pain hover:text-white transition-colors duration-300"
            >
              <Save size={20} className="mr-2" />
              Save Progress
            </button> */}

            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-purple-pain text-white rounded-md hover:bg-medium-purple transition-colors duration-300"
            >
              {step === steps.length ? 'Submit' : 'Next'}
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
